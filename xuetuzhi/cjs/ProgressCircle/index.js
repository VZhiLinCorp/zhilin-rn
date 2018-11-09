/* eslint new-cap: ["error", { "capIsNew": false }] */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Animated, Easing, ART, StyleSheet, Text, View } from 'react-native';

function withAnimation(WrappedComponent, indeterminateProgress) {
  const wrappedComponentName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return class AnimatedComponent extends Component {
    static displayName = `withAnimation(${wrappedComponentName})`;
    static propTypes = {
      animated: PropTypes.bool,
      direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
      indeterminate: PropTypes.bool,
      progress: PropTypes.number.isRequired,
    };

    static defaultProps = {
      animated: true,
      indeterminate: false,
      progress: 0,
    };

    constructor(props) {
      super(props);

      this.progressValue = Math.min(Math.max(props.progress, 0), 1);
      this.rotationValue = 0;
      this.state = {
        progress: new Animated.Value(this.progressValue),
        rotation: new Animated.Value(this.rotationValue),
      };
    }

    componentDidMount() {
      this.state.progress.addListener(event => {
        this.progressValue = event.value;
      });
      this.state.rotation.addListener(event => {
        this.rotationValue = event.value;
      });
      if (this.props.indeterminate) {
        this.spin();
        if (indeterminateProgress) {
          Animated.spring(this.state.progress, {
            toValue: indeterminateProgress,
          }).start();
        }
      }
    }

    componentWillUnmount() {
      this.state.progress.removeAllListeners();
      this.state.rotation.removeAllListeners();
    }

    componentWillReceiveProps(props) {
      if (props.indeterminate !== this.props.indeterminate) {
        if (props.indeterminate) {
          this.spin();
        } else {
          Animated.spring(this.state.rotation, {
            toValue: this.rotationValue > 0.5 ? 1 : 0,
          }).start(endState => {
            if (endState.finished) {
              this.state.rotation.setValue(0);
            }
          });
        }
      }
      const progress = props.indeterminate
        ? indeterminateProgress || 0
        : Math.min(Math.max(props.progress, 0), 1);
      if (progress !== this.progressValue) {
        if (props.animated) {
          Animated.spring(this.state.progress, {
            toValue: progress,
            bounciness: 0,
          }).start();
        } else {
          this.state.progress.setValue(progress);
        }
      }
    }

    spin() {
      this.state.rotation.setValue(0);
      Animated.timing(this.state.rotation, {
        toValue: this.props.direction === 'counter-clockwise' ? -1 : 1,
        duration: 1000,
        easing: Easing.linear,
        isInteraction: false,
      }).start(endState => {
        if (endState.finished) {
          this.spin();
        }
      });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          progress={
            this.props.animated ? this.state.progress : this.props.progress
          }
          rotation={this.state.rotation}
        />
      );
    }
  };
}


const CIRCLE = Math.PI * 2;

function makeArcPath(x, y, startAngleArg, endAngleArg, radius, direction) {
  let startAngle = startAngleArg;
  let endAngle = endAngleArg;
  if (endAngle - startAngle >= CIRCLE) {
    endAngle = CIRCLE + (endAngle % CIRCLE);
  } else {
    endAngle = endAngle % CIRCLE;
  }
  startAngle = startAngle % CIRCLE;
  const angle =
    startAngle > endAngle
      ? CIRCLE - startAngle + endAngle
      : endAngle - startAngle;

  if (angle >= CIRCLE) {
    return ART.Path()
      .moveTo(x + radius, y)
      .arc(0, radius * 2, radius, radius)
      .arc(0, radius * -2, radius, radius)
      .close();
  }

  const directionFactor = direction === 'counter-clockwise' ? -1 : 1;
  endAngle *= directionFactor;
  startAngle *= directionFactor;
  const startSine = Math.sin(startAngle);
  const startCosine = Math.cos(startAngle);
  const endSine = Math.sin(endAngle);
  const endCosine = Math.cos(endAngle);

  const arcFlag = angle > Math.PI ? 1 : 0;
  const reverseFlag = direction === 'counter-clockwise' ? 0 : 1;

  return `M${x + radius * (1 + startSine)} ${y + radius - radius * startCosine}
          A${radius} ${radius} 0 ${arcFlag} ${reverseFlag} ${x +
    radius * (1 + endSine)} ${y + radius - radius * endCosine}`;
}

class Arc extends Component {
  static propTypes = {
    startAngle: PropTypes.number.isRequired, // in radians
    endAngle: PropTypes.number.isRequired, // in radians
    radius: PropTypes.number.isRequired,
    offset: PropTypes.shape({
      top: PropTypes.number,
      left: PropTypes.number,
    }),
    strokeCap: PropTypes.string,
    strokeWidth: PropTypes.number,
    direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
  };

  static defaultProps = {
    startAngle: 0,
    offset: { top: 0, left: 0 },
    strokeCap: 'butt',
    strokeWidth: 0,
    direction: 'clockwise',
  };

  render() {
    const {
      startAngle,
      endAngle,
      radius,
      offset,
      direction,
      strokeCap,
      strokeWidth,
      ...restProps
    } = this.props;

    const path = makeArcPath(
      (offset.left || 0) + strokeWidth / 2,
      (offset.top || 0) + strokeWidth / 2,
      startAngle,
      endAngle,
      radius - strokeWidth / 2,
      direction
    );

    return (
      <ART.Shape
        d={path}
        strokeCap={strokeCap}
        strokeWidth={strokeWidth}
        {...restProps}
      />
    );
  }
}







const AnimatedSurface = Animated.createAnimatedComponent(ART.Surface);
const AnimatedArc = Animated.createAnimatedComponent(Arc);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
});

class ProgressCircle extends Component {
  static propTypes = {
    animated: PropTypes.bool,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.number,
    color: PropTypes.string,
    children: PropTypes.node,
    direction: PropTypes.oneOf(['clockwise', 'counter-clockwise']),
    fill: PropTypes.string,
    formatText: PropTypes.func,
    indeterminate: PropTypes.bool,
    progress: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.instanceOf(Animated.Value),
    ]),
    rotation: PropTypes.instanceOf(Animated.Value),
    showsText: PropTypes.bool,
    icon: PropTypes.object,
    size: PropTypes.number,
    style: PropTypes.any,
    strokeCap: PropTypes.oneOf(['butt', 'square', 'round']),
    textStyle: PropTypes.any,
    thickness: PropTypes.number,
    unfilledColor: PropTypes.string,
    endAngle: PropTypes.number,
  };

  static defaultProps = {
    borderWidth: 1,
    color: 'rgba(0, 122, 255, 1)',
    direction: 'clockwise',
    formatText: progress => `${Math.round(progress * 100)}%`,
    progress: 0,
    showsText: false,
    size: 40,
    thickness: 2,
    endAngle: 0.9,
  };

  constructor(props, context) {
    super(props, context);

    this.progressValue = 0;
  }

  componentWillMount() {
    if (this.props.animated) {
      this.props.progress.addListener(event => {
        this.progressValue = event.value;
        if (this.props.showsText || this.progressValue === 1) {
          this.forceUpdate();
        }
      });
    }
  }

  render() {
    const {
      animated,
      borderColor,
      borderWidth,
      color,
      children,
      direction,
      fill,
      formatText,
      indeterminate,
      progress,
      rotation,
      showsText,
      icon,
      size,
      style,
      strokeCap,
      textStyle,
      thickness,
      unfilledColor,
      endAngle,
      ...restProps
    } = this.props;

    const border = borderWidth || (indeterminate ? 1 : 0);

    const radius = size / 2 - border;
    const offset = {
      top: border,
      left: border,
    };
    const textOffset = border + thickness;
    const textSize = size - textOffset * 2;

    const Surface = rotation ? AnimatedSurface : ART.Surface;
    const Shape = animated ? AnimatedArc : Arc;
    const progressValue = animated ? this.progressValue : progress;
    const angle = animated
      ? Animated.multiply(progress, CIRCLE)
      : progress * CIRCLE;

    return (
      <View style={[styles.container, style]} {...restProps}>
        <Surface
          width={size}
          height={size}
          style={{
            transform: [
              {
                rotate:
                  indeterminate && rotation
                    ? rotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', '360deg'],
                    })
                    : '0deg',
              },
            ],
          }}
        >
          {unfilledColor && progressValue !== 1 ? (
            <Shape
              fill={fill}
              radius={radius}
              offset={offset}
              startAngle={angle}
              endAngle={CIRCLE}
              direction={direction}
              stroke={unfilledColor}
              strokeWidth={thickness}
            />
          ) : (
              false
            )}
          {!indeterminate ? (
            <Shape
              fill={fill}
              radius={radius}
              offset={offset}
              startAngle={0}
              endAngle={angle}
              direction={direction}
              stroke={color}
              strokeCap={strokeCap}
              strokeWidth={thickness}
            />
          ) : (
              false
            )}
          {border ? (
            <Arc
              radius={size / 2}
              startAngle={0}
              endAngle={(indeterminate ? endAngle * 2 : 2) * Math.PI}
              stroke={borderColor || color}
              strokeCap={strokeCap}
              strokeWidth={border}
            />
          ) : (
              false
            )}
        </Surface>
        {!indeterminate && showsText ? (
          <View
            style={{
              position: 'absolute',
              left: textOffset,
              top: textOffset,
              width: textSize,
              height: textSize,
              borderRadius: textSize / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={[
                {
                  color,
                  fontSize: textSize / 4.5,
                  fontWeight: '300',
                },
                textStyle,
              ]}
            >
              {formatText(progressValue)}
            </Text>
          </View>
        ) : (
            false
          )}
        {!showsText && icon ? (
          <View
            style={{
              position: 'absolute',
              left: textOffset,
              top: textOffset,
              width: textSize,
              height: textSize,
              borderRadius: textSize / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {
              icon
            }
          </View>
        ) : (
            false
          )}
        {children}
      </View>
    );
  }
}

export default withAnimation(ProgressCircle);
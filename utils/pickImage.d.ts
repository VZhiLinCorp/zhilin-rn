
interface opt {
    title: String,
    cancelButtonTitle: String,
    takePhotoButtonTitle: String,
    chooseFromLibraryButtonTitle: String,
    storageOptions: {
        skipBackup: Boolean,
        path: String
    },
    quality: Number,
}

export function pickImage(onStart: Function, onError: Function, onSuccess: Function, options: opt): void
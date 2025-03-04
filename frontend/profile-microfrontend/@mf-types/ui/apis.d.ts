
    export type RemoteKeys = 'ui/PopupWithForm';
    type PackageType<T> = T extends 'ui/PopupWithForm' ? typeof import('ui/PopupWithForm') :any;
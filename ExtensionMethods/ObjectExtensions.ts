module Pipelines.ExtensionMethods {
    export class ObjectExtensionMethods {
        public static IsNull<T>(obj: T): boolean {
            return obj == null;
        }
        public static IsNotNull<T>(obj: T): boolean {
            return !ObjectExtensionMethods.IsNull(obj);
        }
        public static HasValue<T>(obj: T): boolean {
            return ObjectExtensionMethods.IsNotNull(obj);
        }
        public static HasNoValue<T>(obj: T): boolean {
            return !ObjectExtensionMethods.HasValue(obj);
        }
        public static Ensure<T>(obj: T, value: T): T {
            return ObjectExtensionMethods.HasValue(obj) ? obj : value;
        }
    }
}
export function IsNull<T>(obj: T): boolean {
    return obj == null;
}
export function IsNotNull<T>(obj: T): boolean {
    return !IsNull(obj);
}
export function HasValue<T>(obj: T): boolean {
    return IsNotNull(obj);
}
export function HasNoValue<T>(obj: T): boolean {
    return !HasValue(obj);
}
export function Ensure<T>(obj: T, value: T): T {
    return HasValue(obj) ? obj : value;
}

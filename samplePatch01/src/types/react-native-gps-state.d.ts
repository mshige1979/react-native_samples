/**
 * react-native-gps-state
 */
declare module 'react-native-gps-state' {
    export interface GPSState {
        requestAuthorization(authType: string): void;
        openLocationSettings(): void;
        openAppDetails(): void;
        getStatus(): Promise<any>;
        isAuthorized(): boolean;
        isDenied(): boolean;
        isMarshmallowOrAbove(): boolean;
    }
    const GPSState: GPSState;
    export default GPSState;
}

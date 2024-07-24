import { ETruthy } from "../types/booleans.types";

export const truthyStringToBoolean = (truthyString: ETruthy): boolean =>
  truthyString === ETruthy.TRUE;

export const toggleStringBoolean = (truthyString: ETruthy): ETruthy =>
  truthyString === ETruthy.TRUE ? ETruthy.FALSE : ETruthy.TRUE;

export const CALL_REQUEST = '@@call/CALL_REQUEST';
export const IS_CALLING = '@@call/IS_CALLING';
export const CALL_REJECTED = '@@call/CALL_REJECTED';
export const CALL_FAILED = '@@call/CALL_FAILED';
export const CALL_MISSED = '@@call/CALL_MISSED';
export const CALL_RECEIVED = '@@call/CALL_RECEIVED';
export const CALL_ACCEPTED = '@@call/CALL_ACCEPTED';
export const SET_CALL_ID = '@@call/SET_CALL_ID';
export const SET_TONE_CALL_ID = '@@call/SET_TONE_CALL_ID';

export const ADD_ADDITIONAL_CALL = '@@call/ADD_ADDITIONAL_CALL';
export const REMOVE_ADDITIONAL_CALL = '@@call/REMOVE_ADDITIONAL_CALL';

export const CALL_FINISHED_ACTIONS = {
  FINISH_ONGOING_CALL: '@@call/FINISH_ONGOING_CALL',
  FINISH_TEMP_CALL: '@@call/FINISH_TEMP_CALL'
};

export const ADDITIONAL_CALL_ACTIONS = {
  SET_ADDITIONAL_CALL: '@@call/SET_ADDITIONAL_CALL'
};
/**
 * Action that triggers a call to a selected caller
 *
 * @param recipient A dict with name and phone number of the recipient
 * @returns {{type: string, recipient: *}} A dict
 */
export function setMakeCallRequest(recipient, uuid) {
  return {
    type: CALL_REQUEST,
    recipient,
    uuid
  };
}

/**
 * Action triggered when a call is taking place.
 *
 * @returns {{type: string}} A dict
 */
export function setIsCalling(calling) {
  return {
    type: IS_CALLING,
    calling
  };
}

/**
 * Action triggered when a call is being received
 *
 * @returns {{type: string}} A dict
 */
export function setIsReceivingCall(callerNumber, callerName, uuid) {
  return {
    type: CALL_RECEIVED,
    callerNumber,
    callerName,
    uuid
  };
}

/**
 * Action triggered when a call is accepted
 *
 * @returns {{type: string}} A dict
 */
export function setCallAccepted() {
  return {
    type: CALL_ACCEPTED,
    startTime: Date.now()
  };
}

/**
 * Action triggered when a call is rejected
 * @returns {{type: string}} A dict
 */
export function setCallRejected(errors = { code: { status_code: 0 } }) {
  return {
    type: CALL_REJECTED,
    errors
  };
}

/**
 * Action triggered when a call is rejected
 * @returns {{type: string}} A dict
 */
export function setCallFailed(errors = { code: { status_code: 0 } }) {
  return {
    type: CALL_FAILED,
    errors
  };
}

/**
 * Action triggered when a call is not taken
 * @returns {{type: string}} A dict
 */
export function setCallMissed() {
  return {
    type: CALL_MISSED
  };
}

/**
 *
 * @param { boolean } onCall Whether the application should remain on call or not
 * @param { object } remote The remote that will be set on the application
 */
export function setTempCallFinished() {
  return {
    type: CALL_FINISHED_ACTIONS.FINISH_TEMP_CALL
  };
}

/**
 *
 * @param { boolean } onCall Whether the application should remain on call or not
 * @param { object } remote The remote that will be set on the application
 */
export function setOngoingCallFinished(remote = undefined) {
  return {
    remote,
    type: CALL_FINISHED_ACTIONS.FINISH_ONGOING_CALL
  };
}

/**
 *
 */
export function incrementAdditionalCallsNumber() {
  return {
    type: ADD_ADDITIONAL_CALL
  };
}

/**
 *
 */
export function decrementAdditionalCallsNumber() {
  return {
    type: REMOVE_ADDITIONAL_CALL
  };
}

export function setAdditionalCall(additionalCall) {
  return {
    type: ADDITIONAL_CALL_ACTIONS.SET_ADDITIONAL_CALL,
    additionalCall
  };
}

/**
 * Action triggered when a call is taking place.
 *
 * @returns {{type: string}} A dict
 */
export function setCallId(callId) {
  return {
    type: SET_CALL_ID,
    callId
  };
}

/**
 * Action triggered when a call is taking place.
 *
 * @returns {{type: string}} A dict
 */
export function setToneCallId(callId) {
  return {
    type: SET_TONE_CALL_ID,
    callId
  };
}

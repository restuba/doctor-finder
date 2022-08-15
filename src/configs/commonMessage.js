export const commonMessage = {
  required: (message) => {
    return `Please input a ${message}.`;
  },
  requiredPlural: (message) => {
    return `Please input ${message}.`;
  },
  invalidType: (message) => {
    return `Please input a valid ${message}.`;
  },
  successCreate: (message) => {
    return `Successful create ${message}`;
  },
  failedCreate: (message) => {
    return `Unsuccessful create ${message}`;
  },
  successUpdate: (message) => {
    return `Successful update ${message}`;
  },
  failedUpdate: (message) => {
    return `Unsuccessful update ${message}`;
  },
  successUpload: (message) => {
    return `Successful upload ${message}`;
  },
  failedUpload: (message) => {
    return `Unsuccessful upload ${message}`;
  },
  successDelete: (message) => {
    return `Successful delete ${message}`;
  },
  failedDelete: (message) => {
    return `Unsuccessful delete ${message}`;
  },
};

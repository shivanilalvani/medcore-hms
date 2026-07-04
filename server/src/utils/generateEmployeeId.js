const generateEmployeeId = async () => {
  const timestamp = Date.now().toString().slice(-6);
  return `DOC-${timestamp}`;
};

module.exports = generateEmployeeId;
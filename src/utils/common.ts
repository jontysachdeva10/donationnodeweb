const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500
}

const formatData = async (data: object) => {
  if (data) {
    return { data };
  } else {
    throw new Error("Data not found");
  }
};

const ApiError = (name, description, error) => {
  switch(name) {
    case 'Not Found':
      return { name, statusCode: STATUS_CODES.NOT_FOUND, description, error };
    case 'Internal Error':
      return { name, statusCode: STATUS_CODES.INTERNAL_ERROR, description, error };
  }
}

export { formatData, ApiError, STATUS_CODES };
const data = (id, type, payload, rest = {}) => {
  let resp = { id, type, attributes: payload }
  if (Object.keys(rest).length >= 1) {
    resp = Object.assign(rest, resp)
  }

  return { data: resp }
}

const error = (status, title, detail, code = 0) => {
  const resp = { status, title, detail }
  if (code > 0) {
    return Object.assign({ code }, resp)
  }

  return resp
}

const errors = (...rest) => {
  if (rest.length >= 1) {
    return { errors: rest }
  }

  return {}
}

export { data, errors, error }

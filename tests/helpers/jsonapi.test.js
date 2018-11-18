import * as jsonapi from '../../src/helpers/jsonapi'

describe('test helpers/jsonapi - function: data', () => {
  test('jsonapi data structure success', () => {
    const buildFakeDAta = jsonapi.data('id', 'type', { 'key1': 'value1' })
    expect(buildFakeDAta.data).toBeDefined()
    expect(buildFakeDAta.data.id).toEqual('id')
    expect(buildFakeDAta.data.type).toEqual('type')
    expect(buildFakeDAta.data.attributes).toBeDefined()

    const payload = buildFakeDAta.data.attributes
    expect(payload.key1).toBeDefined()
    expect(payload.key1).toEqual('value1')
  })

  test('jsonapi data structure adding rest payload', () => {
    const buildFakeDAta = jsonapi.data('id', 'type', { 'key1': 'value1' }, { 'rest1': 'rest2' })
    expect(buildFakeDAta.data).toBeDefined()
    expect(buildFakeDAta.data.rest1).toBeDefined()
    expect(buildFakeDAta.data.rest1).toEqual('rest2')
  })
})

describe('test helpers/jsonapi - function: error', () => {
  test('jsonapi error structure success', () => {
    const buildFakeError = jsonapi.error('status', 'title', 'detail')
    expect(buildFakeError.status).toBeDefined()
    expect(buildFakeError.title).toBeDefined()
    expect(buildFakeError.detail).toBeDefined()

    expect(buildFakeError.status).toEqual('status')
    expect(buildFakeError.title).toEqual('title')
    expect(buildFakeError.detail).toEqual('detail')
  })

  test('jsonapi error structure adding code', () => {
    const buildFakeError = jsonapi.error('status', 'title', 'detail', 500)
    expect(buildFakeError.code).toBeDefined()
    expect(buildFakeError.code).toEqual(500)
  })
})

describe('test helpers/jsonapi - function: errors', () => {
  test('jsonapi errors structure success', () => {
    const buildFakeError = jsonapi.error('status', 'title', 'detail')
    const buildFakeError2 = jsonapi.error('status2', 'title2', 'detail2')

    const buildFakeErrors = jsonapi.errors(buildFakeError, buildFakeError2)
    expect(buildFakeErrors.errors).toBeDefined()
    expect(buildFakeErrors.errors.length).toEqual(2)
  })

  test('jsonapi errors structure return empty object', () => {
    const buildFakeErrors = jsonapi.errors()
    expect(Object.keys(buildFakeErrors)).toHaveLength(0)
  })
})

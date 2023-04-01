import { MissingParamsError } from '../errors/missing-params-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamsError('name'))
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: badRequest(new MissingParamsError('email'))
      }
    }
  }
}

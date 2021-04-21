import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from "class-validator";

const roomNumbers: string[] = [];

@ValidatorConstraint({ async: true })
export class IsRoomNumberContraint implements ValidatorConstraintInterface {
  validate(roomNumber: any, args: ValidationArguments) {
    if (roomNumbers.includes(roomNumber)) {
      return true;
    } else {
      return false;
    }
  }
}

export function IsValidRoomNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsRoomNumberContraint,
    });
  };
}

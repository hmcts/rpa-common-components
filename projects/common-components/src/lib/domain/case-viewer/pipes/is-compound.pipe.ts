import { Pipe, PipeTransform } from '@angular/core';
import { CaseField } from '../models/definition/case-field.model';
import { FieldTypeEnum } from '../models/definition/field-type-enum.model';

@Pipe({
  name: 'ccdIsCompound'
})
export class IsCompoundPipe implements PipeTransform {

  private readonly COMPOUND_TYPES: FieldTypeEnum[] = [
    'Complex', 'Label', 'AddressGlobal', 'AddressUK', 'AddressGlobalUK'
  ];

  transform(field: CaseField): boolean {
    if (!field || !field.field_type || !field.field_type.type) {
      return false;
    }

    return this.COMPOUND_TYPES.indexOf(field.field_type.type) !== -1;
  }

}

export class AddressModel {
  form = [
      {
          key: 'street',
          type: 'input',
          templateOptions: {
              placeholder: 'Calle',
              required: true,
          }
      },
      {
          key: 'outsideNumber',
          type: 'input',
          templateOptions: {
              placeholder: 'Número Ext.',
              required: true,
          }
      },
      {
          key: 'insideNumber',
          type: 'input',
          templateOptions: {
              placeholder: '# Int. (Opcional)',
              required: false,
          }
      },
      {
          key: 'zip',
          type: 'input',
          templateOptions: {
              placeholder: 'C.P.',
              required: true,
          }
      },
      {
          key: 'suburb',
          type: 'input',
          templateOptions: {
              placeholder: 'Colonia',
              required: true,
          }
      },
      {
          key: 'state',
          type: 'input',
          templateOptions: {
              placeholder: 'Estado',
              required: true,
          }
      },
      {
          key: 'district',
          type: 'input',
          templateOptions: {
              placeholder: 'Municipio',
              required: true,
          }
      }
  ];
}

export interface AddressClientInterface{
  street: string;
  outsideNumber: string;
  insideNumber?: string;
  zip: string;
  suburb: string;
  state: string;
  district: string;
  typeResidence: string;
  timeResidence: string;
  fileResidence: string;
}

export interface AddressJobInterface{
  street: string;
  outsideNumber: string;
  insideNumber?: string;
  zip: string;
  suburb: string;
  state: string;
  district: string;
}

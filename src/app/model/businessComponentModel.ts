export class BusinessAddressModel {
  form = [
      {
          key: 'peopleVisit',
          type: 'input',
          templateOptions: {
              placeholder: 'Cuantas personas visitan tu negocio a la semana?',
              required: true,
          }
      },
      {
        key: 'businessIs',
        type: 'input',
        templateOptions: {
            placeholder: 'El local dónde tienes tu negocio es?',
            required: true,
        }
    },
  ];
  accountYou=[
    {
        key: 'economicActivity',
        type: 'input',
        templateOptions: {
            placeholder: 'Actividad Económica',
            required: true,
        }
    },
    {
        key: 'yearsActivity',
        type: 'input',
        templateOptions: {
            placeholder: 'Cuantos años tienes en el empleo o actividad?',
            required: true,
        }
    },
    {
        key: 'phone',
        type: 'input',
        templateOptions: {
            placeholder: 'Teléfono de trabajo (Opcional)',
            required: false,
        }
    },
    {
        key: 'numberEmployees',
        type: 'input',
        templateOptions: {
            placeholder: 'Número de empleados',
            required: true,
        }
    },

  ]
  businessAbout = [
      {
          key: 'educationalLevel',
          type: 'input',
          templateOptions: {
              placeholder: 'Nivel de estudios',
              required: true,
          }
      },
      {
          key: 'númeroEonomicos',
          type: 'input',
          templateOptions: {
              placeholder: 'Número de dependientes economicos',
              required: true,
          }
      },
      {
          key: 'numChildren',
          type: 'input',
          templateOptions: {
              placeholder: 'Número de hijos',
              required: true,
          }
      },
      {
          key: 'INFO',
          type: 'input',
          templateOptions: {
              placeholder: '¿Como se entero de nosotros?',
              required: true,
          }
      },
      {
          key: 'EdoC',
          type: 'input',
          templateOptions: {
              placeholder: 'Edo. Civil',
              required: true,
          }
      },
      {
          key: 'CountryBirth',
          type: 'input',
          templateOptions: {
              placeholder: 'País de nacimiento',
              required: true,
          }
      },

  ]
  beneficiaries = [
    {
        key: 'name',
        type: 'input',
        templateOptions: {
            placeholder: 'Nombre',
            required: true,
        }
    },
    {
        key: 'DateBirth',
        type: 'input',
        templateOptions: {
            placeholder: 'Fecha de nacimiento',
            required: true,
        }
    },
    {
        key: 'phone',
        type: 'input',
        templateOptions: {
            placeholder: '(+52) Teléfono',
            required: true,
        }
    },
    {
        key: 'relationship',
        type: 'input',
        templateOptions: {
            placeholder: 'Parentesco',
            required: true,
        }
    },
    {
        key: 'address',
        type: 'input',
        templateOptions: {
            placeholder: 'Dirección',
            required: true,
        }
    },
    {
        key: 'percentage',
        type: 'input',
        templateOptions: {
            placeholder: 'Porcentaje',
            required: true,
        }
    },
  ]
  beneficiariesTwo = [
    {
        key: 'name',
        type: 'input',
        templateOptions: {
            placeholder: 'Nombre',
            required: true,
        }
    },
    {
        key: 'DateBirth',
        type: 'input',
        templateOptions: {
            placeholder: 'Fecha de nacimiento',
            required: true,
        }
    },
    {
        key: 'phone',
        type: 'input',
        templateOptions: {
            placeholder: '(+52) Teléfono',
            required: true,
        }
    },
    {
        key: 'relationship',
        type: 'input',
        templateOptions: {
            placeholder: 'Parentesco',
            required: true,
        }
    },
    {
        key: 'address',
        type: 'input',
        templateOptions: {
            placeholder: 'Dirección',
            required: true,
        }
    },
    {
        key: 'percentage',
        type: 'input',
        templateOptions: {
            placeholder: 'Porcentaje',
            required: true,
        }
    },
  ]




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

import TrabajoSocial from './assets/trabajosocial.png'
import Deportes from './assets/deportes.png'
import Filosofia from './assets/filosofía.png'
import Geografia from './assets/geografía.png'
import Historia from './assets/historia.png'
import Literatura from './assets/literatura.png'
import Tecnologia from './assets/tecnología.png'

export const imgs = [
  TrabajoSocial,
  Deportes,
  Filosofia,
  Geografia,
  Historia,
  Literatura,
  Tecnologia,
]

export const categories = {
  historia: 'Historia',
  literatura: 'Literatura',
  deportes: 'Deportes',
  trabajosocial: 'TrabajoSocial',
  filosofia: 'Filosofía',
  tecnologia: 'Tecnología',
  geografia: 'Geografía',
}

const {
  historia,
  tecnologia,
  literatura,
  deportes,
  trabajosocial,
  filosofia,
  geografia,
} = categories

export const questions = [
  {
    id: '1',
    question:
      'De conformidad con el artículo 75.4 de la Ley 39/2015, de 1 de octubre, del Procedimiento\nAdministrativo Común de las Administraciones Públicas, en cualquier caso, ¿quién\nadoptará las medidas necesarias para lograr el pleno respeto a los principios de\ncontradicción y de igualdad de los interesados en el procedimiento?',
    category: trabajosocial,
    correct_answer: 'El órgano instructor.',
    incorrect_answers: [
      'El órgano que inicia el expediente.',
      'El órgano inspector.',
    ],
  },
  {
    id: '2',
    question:
      'De los grupos de actos que se enuncian a continuación, según el artículo 47 de la Ley\n39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las\nAdministraciones Públicas, sólo uno, no es nulo de pleno derecho:',
    category: trabajosocial,
    correct_answer:
      'Los que carezcan de los requisitos formales indispensables para alcanzar su fin.',
    incorrect_answers: [
      'Los que tengan un contenido imposible.',
      'Los dictados por órgano manifiestamente incompetente por razón de la materia o del\nterritorio.',
    ],
  },
  {
    id: '3',
    question:
      'En atención a lo dispuesto en el artículo 24.1 de la Ley 39/2015, de 1 de octubre, del\nProcedimiento Administrativo Común de las Administraciones Públicas, en los\nprocedimientos iniciados a solicitud del interesado/a, cuando el procedimiento tenga por\nobjeto el acceso a actividades o su ejercicio, la ley que disponga el carácter desestimatorio\ndel silencio deberá fundarse en la concurrencia de:',
    category: trabajosocial,
    correct_answer: 'Razones imperiosas de interés general.',
    incorrect_answers: [
      'Razones sobrevenidas y urgentes de interés público.',
      'Razones de emergencia nacional.',
    ],
  },
  {
    id: '4',
    question:
      'Según el artículo 56 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo\nComún de las Administraciones Públicas, antes de la iniciación del procedimiento\nadministrativo, el órgano competente para iniciar o instruir el procedimiento, de oficio o a instancia de parte, en los casos de urgencia inaplazable y para la protección provisional de los intereses implicados, podrá adoptar de forma motivada las medidas provisionales\nque resulten necesarias y proporcionadas. Las medidas provisionales deberán ser\nconfirmadas, modificadas o levantadas en el acuerdo de iniciación del procedimiento, que\ndeberá efectuarse',
    category: trabajosocial,
    correct_answer:
      'Dentro de los quince días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.',
    incorrect_answers: [
      'Dentro de los diez días siguientes a su adopción, el cual podrá ser objeto del recurso que proceda.',
      'Dentro de los veinte días siguientes a su adopción, el cual podrá ser objeto del recurso\nque proceda.',
    ],
  },
  {
    id: '5',
    question:
      'Según el artículo 36 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo\nComún de las Administraciones Públicas, cuando deba dictarse una serie de actos\nadministrativos de la misma naturaleza:',
    category: trabajosocial,
    correct_answer:
      'Podrán refundirse en un único acto, acordado por el órgano competente.',
    incorrect_answers: [
      'Deberán refundirse en un único acto, acordado por el órgano competente.',
      'Podrán refundirse en un único acto, a instancia de los/las interesados/as.',
    ],
  },
  {
    id: '6',
    question:
      'Según la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Común de las\nAdministraciones Públicas, la publicación de los actos administrativos, se requiere cuando:',
    category: trabajosocial,
    correct_answer: 'Existe una pluralidad indeterminada de destinatarios.',
    incorrect_answers: [
      'Se separan del dictamen de órganos consultivos.',
      'Limitan derechos subjetivos.',
    ],
  },
  {
    id: '7',
    question:
      '¿Qué artículo de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo\nComún de las Administraciones Públicas, establece los casos en los que debe motivarse un\nacto administrativo?',
    category: trabajosocial,
    correct_answer: 'Artículo 35',
    incorrect_answers: ['Artículo 56', 'Artículo 27'],
  },
  {
    id: '8',
    question:
      'Según el artículo 48 de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo\nComún de las Administraciones Públicas, ¿qué implica la realización de actuaciones\nadministrativas fuera del tiempo establecido para ellas?',
    category: trabajosocial,
    correct_answer:
      'La anulabilidad del acto cuando así lo disponga la naturaleza del término o plazo.',
    incorrect_answers: [
      'La nulidad de pleno derecho.',
      'La nulidad del acto cuando así lo disponga la naturaleza del término o plazo.',
    ],
  },
  {
    id: '9',
    question:
      'Según el artículo 71 de la Ley 39/2015, de 1 de octubre, del Procedimiento AdministrativoComún de las Administraciones Públicas, sometido al principio de celeridad, se impulsará\nde oficio en todos sus trámites y a través de medios electrónicos, respetando los principios\nde:',
    category: trabajosocial,
    correct_answer: 'Transparencia y publicidad.',
    incorrect_answers: ['Economía y simplificación.', 'Eficacia y eficiencia.'],
  },
  {
    id: '10',
    question:
      'De acuerdo con el art. 77.2 de la Ley 39/2015, de 1 de octubre, del Procedimiento\nAdministrativo Común de las Administraciones Públicas, la apertura del periodo de prueba\ndentro de un procedimiento administrativo tendrá un plazo de:',
    category: trabajosocial,
    correct_answer: 'No superior a treinta días ni inferior a diez.',
    incorrect_answers: [
      'No superior a dos meses ni inferior a un mes.',
      'No superior a cuarenta y cinco días ni inferior a quince.',
    ],
  },
  {
    id: '11',
    question:
      'Siguiendo el artículo 71 de la Ley 39/2015, de 1 de octubre, del Procedimiento\nAdministrativo Común de las Administraciones Públicas, instruido el procedimiento e\ninmediatamente antes de redactar la propuesta de resolución, se dará al interesado, el\ndenominado:',
    category: trabajosocial,
    correct_answer: 'Trámite de audiencia.',
    incorrect_answers: ['Trámite de alegaciones.', 'Trámite de conocimiento.'],
  },
  {
    id: '12',
    question:
      'Cuando un día fuese hábil en el municipio o Comunidad Autónoma en que residiese el\ninteresado, e inhábil en la sede del órgano administrativo, o a la inversa:',
    category: trabajosocial,
    correct_answer: 'Se considerará inhábil en todo caso.',
    incorrect_answers: [
      'Se considerará inhábil salvo que una norma reglamentaria disponga otra cosa.',
      'Se considerará hábil en todo caso.',
    ],
  },
  {
    id: '13',
    question:
      'Los actos de las Administraciones Públicas sujetos al Derecho Administrativo:',
    category: trabajosocial,
    correct_answer:
      'Se presumirán válidos y producirán efectos desde la fecha en que se dicten, salvo que en\nellos se disponga otra cosa.',
    incorrect_answers: [
      'Se condiciona su validez y efectos a la fecha de recepción de la correspondiente\nnotificación.',
      'Se presumirán válidos y producirán efectos desde la fecha en que se reciba la\ncorrespondiente notificación, salvo que en ellos se disponga otra cosa.',
    ],
  },
  {
    id: '14',
    question:
      'Desde la perspectiva administrativa, según lo que establece la Ley 38/2003, de 17 denoviembre, General de Subvenciones, las subvenciones son:',
    category: trabajosocial,
    correct_answer: 'Una técnica de fomento',
    incorrect_answers: [
      'Una técnica de control.',
      'Una modalidad de gasto público.',
    ],
  },
  {
    id: '15',
    question:
      'La ordenación de un régimen jurídico común en la relación subvencional se inspira\ndirectamente en el artículo de la Constitución Española;',
    category: trabajosocial,
    correct_answer: 'Art. 149.1.18ª',
    incorrect_answers: ['Art. 149.1.1ª', 'Art. 149.1.3ª'],
  },
  {
    id: '16',
    question:
      'Según lo que establece el art. 13.2 de la Ley 38/2003, de 17 de noviembre, General de\nSubvenciones, no podrán obtener la condición de beneficiario de una subvención:',
    category: trabajosocial,
    correct_answer:
      'Los que hayan dado lugar, por causa de la que hubiesen sido declarados culpables,\na la resolución firme de cualquier contrato celebrado con la Administración.',
    incorrect_answers: [
      'Los condenados mediante sentencia a la pérdida de la posibilidad de obtener\nayudas.',
      'Los que tengan la residencia fiscal fuera de España.',
    ],
  },
  {
    id: '17',
    question:
      'Según el artículo 9.2 de La Ley 38/2003 General de Subvenciones, para poder otorgar una\nsubvención:',
    category: trabajosocial,
    correct_answer:
      'Deben aprobarse, con carácter previo a su otorgamiento, las normas que establezcan\nlas bases reguladoras de concesión de la subvención.',
    incorrect_answers: [
      'Debe publicarse en el Boletín Oficial del Estado la existencia de crédito adecuado y\nsuficiente para la concesión de la subvención en cuestión.',
      'Deben aprobarse las bases reguladoras, una vez se ha tramitado el procedimiento de\nconcesión.',
    ],
  },
  {
    id: '18',
    question:
      'Conforme a la Ley 38/2003, de 17 de noviembre, General de Subvenciones en la gestión\nde subvenciones en régimen de concurrencia competitiva:',
    category: trabajosocial,
    correct_answer:
      'El proceso de selección de los beneficiarios culmina con una resolución del órgano\nconcedente, que llevará consigo el compromiso de gasto por el importe de las\nsubvenciones concedidas.',
    incorrect_answers: [
      'La tramitación del expediente de gasto se inicia una vez publicada la convocatoria en el\nBoletín Oficial del Estado y abierto el plazo de presentación de solicitudes.',
      'El reconocimiento de la obligación es previo a la justificación de la aplicación de los fondos\npor el beneficiario y a la acreditación de que éste se encuentra al corriente de sus\nobligaciones tributarias y con la Seguridad Social.',
    ],
  },
  {
    id: '19',
    question:
      'Según el artículo 22 de la Ley 38/2003, de 17 de noviembre, General de Subvenciones,\ndeben concederse por concurrencia competitiva las subvenciones:',
    category: trabajosocial,
    correct_answer:
      'Las que se concedan con criterios de valoración previamente fijados.',
    incorrect_answers: [
      'Con asignación nominal en los Presupuestos Generales del Estado.',
      'Las de cuantía impuesta por una norma de rango legal.',
    ],
  },
  {
    id: '20',
    question:
      'Según la Ley 38/2003, de 17 de noviembre, General de Subvenciones en el gasto de\nsubvenciones, ¿en qué momento debe efectuarse la aprobación del gasto?:',
    category: trabajosocial,
    correct_answer: 'Con carácter previo a la convocatoria de la subvención.',
    incorrect_answers: [
      'Una vez aprobada la propuesta de resolución definitiva.',
      'Durante la instrucción del procedimiento de concesión.',
    ],
  },
  {
    id: '21',
    question:
      'De conformidad con la Ley General de Subvenciones, el beneficiario de una subvención:',
    category: trabajosocial,
    correct_answer: 'Puede ser una persona física o jurídica.',
    incorrect_answers: [
      'Puede ser sólo una persona física.',
      'Ha de ser una persona jurídica necesariamente, ya que las personas físicas reciben\nayudas, no subvenciones.',
    ],
  },
  {
    id: '22',
    question:
      'Tienen carácter de subvención pública, a los efectos de la Ley General de Subvenciones:',
    category: trabajosocial,
    correct_answer:
      'La actividad subvencional de las Administraciones de las comunidades autónomas.',
    incorrect_answers: [
      'Las prestaciones no contributivas de la Seguridad Social.',
      'Las prestaciones por razón de terrorismo.',
    ],
  },
  {
    id: '23',
    question:
      'Según la Ley 38/2003, de 17 de noviembre, General de Subvenciones, ¿cuál es el concepto\nde subvención?',
    category: trabajosocial,
    correct_answer:
      'Toda disposición dineraria realizada por cualesquiera de los sujetos contemplados en el\nartículo 3 de esta ley, a favor de personas públicas o privadas, cumpliendo una serie de\nrequisitos.',
    incorrect_answers: [
      'Toda disposición normativa realizada por cualesquiera de los sujetos contemplados en el\nartículo 3 de esta ley, a favor de personas públicas o privadas, cumpliendo una serie de\nrequisitos.',
      'Toda disposición dineraria realizada por cualesquiera de los sujetos contemplados en la\nnormativa de contratos, a favor de personas privadas, cumpliendo una serie de requisitos.',
    ],
  },
  {
    id: '24',
    question:
      'De acuerdo con el artículo 42 de la Ley 38/2003, de 17 de noviembre, General de\nSubvenciones, el procedimiento de reintegro de subvenciones:',
    category: trabajosocial,
    correct_answer:
      'Se iniciará de oficio, como consecuencia de la propia iniciativa del órgano concedente, a\npropuesta de la Intervención General o de otros órganos o de denuncia.',
    incorrect_answers: [
      'Se iniciará de oficio y no interrumpe el plazo de prescripción de que dispone la\nAdministración para exigir el reintegro, de acuerdo con lo establecido en el artículo 39 de\nla Ley General de Subvenciones.',
      'Se iniciará de oficio por el órgano concedente, previa audiencia del interesado por un plazo\nno inferior a 15 días hábiles.',
    ],
  },
  {
    id: '25',
    question:
      'En atención a lo previsto en el artículo 15 de la Ley 38/2003, de 17 de noviembre, General\nde Subvenciones, es obligación de la entidad colaboradora:',
    category: trabajosocial,
    correct_answer:
      'Someterse a las actuaciones de comprobación que respecto de la gestión de dichos fondos\npueda efectuar el órgano concedente, así como cualesquiera otras de comprobación y\ncontrol financiero que puedan realizar los órganos de control competentes, tanto\nnacionales como comunitarios, aportando cuanta información le sea requerida en el\nejercicio de las actuaciones anteriores.',
    incorrect_answers: [
      'Comunicar al órgano concedente la obtención de otras subvenciones, ayudas, ingresos o\nrecursos que financien las actividades subvencionadas.',
      'Proceder al reintegro de los fondos percibidos en los supuestos contemplados en el artículo\n37 de la ley 38/2003.',
    ],
  },
  {
    id: '26',
    question:
      'Según la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, se considera “discriminación directa por razón de sexo”:',
    category: trabajosocial,
    correct_answer:
      'Situación en la que se encuentra una persona que sea, haya sido o pudiera ser tratada, en\natención a su sexo, de manera menos favorable que otra en situación comparable.',
    incorrect_answers: [
      'Cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o\nproduzca el efecto de atentar contra la dignidad de una persona, en particular cuando se\ncrea un entorno intimidatorio, degradante u ofensivo',
      'Situación en que una disposición, criterio o práctica aparentemente neutros pone a\npersonas de un sexo en desventaja particular con respecto a personas del otro, salvo que\ndicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una\nfinalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados',
    ],
  },
  {
    id: '27',
    question:
      'Según la Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y\nhombres, el principio de igualdad de trato entre mujeres y hombres supone:a) La ausencia de toda discriminación, directa o indirecta, por razón de sexo, y, especialmente,\nlas derivadas de la maternidad, la asunción de obligaciones familiares y el estado civil.',
    category: trabajosocial,
    correct_answer:
      'La ausencia de toda discriminación directa por razón de sexo cuando derive únicamente de\nla maternidad.',
    incorrect_answers: [
      'La ausencia de toda discriminación indirecta por razón de sexo cuando derive únicamente\ndel estado civil.',
    ],
  },
  {
    id: '28',
    question:
      'La Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres define el acoso\nsexual como:',
    category: trabajosocial,
    correct_answer:
      'Cualquier comportamiento verbal o físico, de naturaleza sexual, que tenga el propósito o\nproduzca el efecto de atentar contra la dignidad de una persona, en particular cuando se\ncrea un entorno intimidatorio, degradante u ofensivo.',
    incorrect_answers: [
      'Cualquier comportamiento realizado en función del sexo de una persona, con el propósito\no el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u\nofensivo.',
      'Cualquier comportamiento realizado con el propósito o el efecto de atentar contra su\ndignidad y de crear un entorno intimidatorio, degradante y ofensivo.',
    ],
  },
  {
    id: '29',
    question:
      'Los servicios y centros que integran el sistema asistencial previsto en Ley 16/2003, de\nprevención y protección integral de las mujeres contra la violencia de género, se clasifican\nen:',
    category: trabajosocial,
    correct_answer:
      'Dispositivo de Emergencia para Mujeres Agredidas, Centros de Acogida Inmediata, Casas de\nAcogida y Pisos Tutelados.',
    incorrect_answers: [
      'Dispositivo de Emergencia para Mujeres Agredidas, Centros de Servicios Sociales, Centros\nde Salud y Centros de Acogida Inmediata.',
      'Dispositivo de Emergencia para Mujeres Agredidas, Residencias y albergues y Casas de\nAcogida.',
    ],
  },
  {
    id: '30',
    question:
      'Las mujeres víctimas de violencia de género, de acuerdo con la legislación sectorial\naplicable, tendrán:',
    category: trabajosocial,
    correct_answer:
      'Acceso prioritario a una vivienda social en virtud de los informes sociales que así lo\nacrediten y aconsejen.',
    incorrect_answers: [
      'Acceso prioritario a una vivienda privada en virtud de los informes educativos que así lo\naconsejen.',
      'Acceso restringido a una vivienda social en virtud de los informes sociales que así lo\ndesaconsejen.',
    ],
  },
  {
    id: '31',
    question:
      'El principio de igualdad ocupa un lugar destacado en nuestro ordenamiento jurídico,\nsiendo recogido en diversas normas estatales entre las que destacamos:',
    category: trabajosocial,
    correct_answer:
      'Constitución Española de 1978, Ley Orgánica 3/2007, de 22 de marzo, para la Igualdad\nEfectiva de Mujeres y Hombres, Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de\nProtección Integral contra la Violencia de Género y Real Decreto-ley 6/2019, de 1 de marzo,\nde medidas urgentes para garantía de la igualdad de trato y de oportunidades entre mujeres\ny hombres en el empleo y la ocupación.',
    incorrect_answers: [
      'Constitución Española de 1978, Ley Orgánica 3/2007, de 22 de marzo, para la Igualdad\nEfectiva de Mujeres y Hombres, Ley Orgánica 8/2014, de 30 de diciembre, de Medidas de\nProtección Integral contra la Violencia de Género y Real Decreto-ley 6/2009, de 4 de marzo,\nde medidas urgentes para garantía de la igualdad de trato y de oportunidades entre mujeres\ny hombres en el empleo y la ocupación.',
      'Constitución Española de 1978, Ley Orgánica 3/2007, de 22 de marzo, para la Igualdad\nEfectiva de Mujeres y Hombres, Ley Orgánica 1/2004, de 28 de diciembre, de Medidas de\nProtección Integral contra la Violencia de Género.',
    ],
  },
  {
    id: '32',
    question:
      'El IV Plan Municipal de igualdad de oportunidades entre hombres y Mujeres de Santa Cruz\nde Tenerife (2022-2027) tiene como principios orientadores que guían su implementación:',
    category: trabajosocial,
    correct_answer:
      'Enfoque de género e interseccional, empoderamiento de las mujeres, estrategia de enfoque\ndual, la participación y la innovación.',
    incorrect_answers: [
      'enfoque de género e interseccional, empoderamiento de las mujeres, estrategia de enfoque\ndual, la participación y la salud.',
      'enfoque de género e interseccional, empoderamiento de las mujeres y hombres, la\nparticipación de las personas y la innovación.',
    ],
  },
  {
    id: '33',
    question:
      'El Gobierno aprobará un Plan para la Igualdad entre mujeres y hombres en la\nAdministración General del Estado y en los organismos públicos vinculados o\ndependientes de ella, que incluya los objetivos a alcanzar en materia de promoción de la\nigualdad de trato y oportunidades en el empleo público, así como las estrategias o\nmedidas a adoptar para su consecución:',
    category: trabajosocial,
    correct_answer: 'Al inicio de cada legislatura',
    incorrect_answers: ['Cada 2 años', 'Cada año'],
  },
  {
    id: '34',
    question:
      'La capacidad y legitimación para intervenir en los procesos civiles, sociales y contenciosoadministrativos\nque versen sobre la defensa del derecho a la igualdad entre hombres y\nmujeres corresponden:',
    category: trabajosocial,
    correct_answer:
      'A las personas físicas y jurídicas con interés legítimo, determinadas en las Leyes reguladoras\nde estos procesos.',
    incorrect_answers: [
      'Exclusivamente a las personas físicas con interés legítimo',
      'Únicamente la persona acosada y sus familiares de hasta segundo grado estarán legitimados.',
    ],
  },
  {
    id: '35',
    question:
      'El Observatorio de la Igualdad de Oportunidades entre hombres y Mujeres se creó en\nEspaña en el año:',
    category: trabajosocial,
    correct_answer: '2000',
    incorrect_answers: ['2001', '2002'],
  },
  {
    id: '36',
    question:
      'La Ley 1/2010, de 26 de febrero, Canaria de Igualdad entre mujeres y hombres tiene como\námbito de aplicación, tal y como se establece en el artículo 2.2 letra b):',
    category: trabajosocial,
    correct_answer:
      'A las entidades que integran la administración local, tanto ayuntamientos como cabildos,\nsus organismos autónomos, consorcios, fundaciones y demás entidades con personalidad\njurídica propia en los que sea mayoritaria la representación directa de dichas entidades.',
    incorrect_answers: [
      'A las entidades que integran la Administración local, tanto ayuntamientos como sus\norganismos autónomos, excluyendo los cabildos.',
      'A las entidades que integran la administración local, tanto ayuntamientos de población\nsuperior a 10.000 habitantes, como cabildos, sus organismos autónomos, consorcios,\nfundaciones, y demás entidades con personalidad jurídica propia en los que sea mayoritaria\nla representación directa de dichas entidades.',
    ],
  },
  {
    id: '37',
    question:
      'Señala cuál de los siguientes NO es uno criterios generales de actuación de los Poderes\nPúblicos señalados en el artículo 14 la Ley Orgánica 3/2007, de 22 de marzo, para la\nigualdad efectiva de mujeres y hombres,',
    category: trabajosocial,
    correct_answer:
      'La adopción de los mecanismos necesarios para mejorar el conocimiento de las diferencias\nen los valores, roles, situaciones, condiciones, aspiraciones y necesidades de mujeres y\nhombres con el fin de evitar segregación laboral y diferencias retributivas.',
    incorrect_answers: [
      'El fomento de la efectividad del principio de igualdad entre mujeres y hombres en las\nrelaciones entre particulares.',
      'La integración del principio de igualdad de trato y de oportunidades en el conjunto de las\npolíticas económica, laboral, social, cultural y artística, con el fin de evitar la segregación\nlaboral y eliminar las diferencias retributivas, así como potenciar el crecimiento del\nempresariado femenino en todos los ámbitos que abarque el conjunto de políticas y el valor\ndel trabajo de las mujeres, incluido el doméstico.',
    ],
  },
  {
    id: '38',
    question:
      'La Constitución no define la noción de servicios sociales. No obstante, el artículo 1\nestablece que España se constituye en un Estado social y democrático de Derecho,\nreconociendo ya el carácter social de nuestro Estado. Esto comporta:',
    category: trabajosocial,
    correct_answer:
      'La protección y promoción de la justicia social y el bienestar social de los ciudadanos.',
    incorrect_answers: [
      'La intervención de los poderes públicos para remover las condiciones necesarias para\nla realización de la libertad y la igualdad.',
      'La intervención de los poderes públicos para promover los obstáculos necesarios para\nla realización de la libertad y la igualdad.',
    ],
  },
  {
    id: '39',
    question:
      'Si bien la Constitución Española no reconoce de forma directa el derecho a los servicios\nsociales, éstos aparecen implícitamente en su articulado. Así, realizando una valoración\nintegradora en el preámbulo de la Ley Canaria de SS.SS se citan los siguientes artículos:',
    category: trabajosocial,
    correct_answer:
      'Artículos 1, 9.2, 10.1, 14, 39, 40.1, 48, 49, 50 y 53.3 CE.',
    incorrect_answers: [
      'Artículos 1, 10.2, 14, 39, 43, 45, 47, 51, 52 CE.',
      'Artículos 1, 10, 15, 38, 43, 48, 49, 50, 51 CE.',
    ],
  },
  {
    id: '40',
    question:
      'Dada la ausencia de una Ley General de Servicios Sociales, en 1988, para determinar los\nmínimos protegibles y superar la tradicional indefinición de los servicios asistenciales el\nEstado impulsó la promoción de la red de servicios sociales municipales, a través de la\nfigura de:',
    category: trabajosocial,
    correct_answer:
      'Convenio-Programa; Plan Concertado para el desarrollo de las Prestaciones Básicas de\nServicios Sociales.',
    incorrect_answers: [
      'La Comisión de Cooperación Interautonómica de Acción Social.',
      'La Creación del Ministerio de Asuntos Sociales.',
    ],
  },
  {
    id: '41',
    question:
      '¿A qué Administración le corresponde la gestión de los equipamientos para el desarrollo\nde las prestaciones del plan concertado?',
    category: trabajosocial,
    correct_answer: 'A las corporaciones locales.',
    incorrect_answers: [
      'A la Administración central.',
      'A la Administración autonómica.',
    ],
  },
  {
    id: '42',
    question:
      '¿Qué servicio incluido en las prestaciones básicas del Plan Concertado está destinado a\nfacilitar el desarrollo o mantener la autonomía personal y prevenir situaciones de\ndeterioro?',
    category: trabajosocial,
    correct_answer: 'Servicio de ayuda a domicilio.',
    incorrect_answers: [
      'Servicio de alojamiento alternativo.',
      'Servicio de inserción social.',
    ],
  },
  {
    id: '43',
    question:
      '¿Cuál es el objetivo de la prestación de prevención e inserción social?',
    category: trabajosocial,
    correct_answer:
      'Prevenir las situaciones de marginación y sus causas a través del fomento de la\nparticipación y de la integración de las personas en exclusión o en riesgo de exclusión\nsocial.',
    incorrect_answers: [
      'Lograr que las personas alcancen una situación de convivencial mediante formas\nalternativas a la convivencia familiar.',
      'Dar a conocer a los ciudadanos tanto sus derechos como los recursos existentes y los\nprocedimientos para dar respuesta a la inserción social.',
    ],
  },
  {
    id: '44',
    question:
      'Las comunidades autónomas han asumido competencias en “asistencia social” en virtud\ndel artículo:',
    category: trabajosocial,
    correct_answer: '148.1.20 CE.',
    incorrect_answers: ['148.1.18 CE.', '148.1.19 CE.'],
  },
  {
    id: '45',
    question:
      'De conformidad con el artículo 29 del Estatuto de Autonomía de Canarias aprobado por\nLey Orgánica 1/2018, de 5 de noviembre:',
    category: trabajosocial,
    correct_answer:
      'Se garantiza por los poderes públicos canarios el deber de información integral de los\nservicios y prestaciones a su cargo.',
    incorrect_answers: [
      'Se garantiza el derecho efectivo a la privacidad y protección de datos personales.',
      'Los poderes públicos canarios establecerán, en la forma que determine la\nreglamentariamente se determine, planes de atención que garanticen los derechos\ndispuestos en el presente Estatuto.',
    ],
  },
  {
    id: '46',
    question:
      'Qué derecho reconoce el artículo 24 del Estatuto de Autonomía de Canarias aprobado\npor Ley Orgánica 1/2018, de 5 de noviembre,',
    category: trabajosocial,
    correct_answer: 'A acceder a una renta de ciudadanía.',
    incorrect_answers: [
      'A la protección de la salud, seguridad.',
      'El derecho a una vivienda digna.',
    ],
  },
  {
    id: '47',
    question:
      'La vigente Ley 16/2019, de 2 de mayo, de Servicios Sociales de Canarias, sustituye a la\nanterior Ley Autonómica de Servicios Sociales:',
    category: trabajosocial,
    correct_answer:
      'Ley 9/1987, de 28 de abril, de Servicios Sociales de la Comunidad Autónoma de Canarias.',
    incorrect_answers: [
      'Ley 1/1996, de 7 de mayo, de Servicios Sociales de la Comunidad Autónoma de Canarias.',
      'Ley 8/1995, de 6 de abril, de Servicios Sociales de la Comunidad Autónoma de Canarias.',
    ],
  },
  {
    id: '48',
    question:
      'La Ley 16/2019, de 2 de mayo, de Servicios Sociales de Canarias detalla los derechos que\nasisten a las personas que acceden a los servicios sociales, y los derechos específicos de\nlas personas usuarias de centros y servicios de atención diurna/nocturna y estancia\nresidencial en sus artículos:',
    category: trabajosocial,
    correct_answer: 'Artículos 10 y 11.',
    incorrect_answers: ['Artículos 8 y 9', 'Artículos 12 y 13'],
  },
  {
    id: '49',
    question:
      'De conformidad con el Estatuto de Autonomía de Canarias, la Comunidad Autónoma de\nCanarias, ostenta, en materia de servicios sociales, la competencia:',
    category: trabajosocial,
    correct_answer: 'Exclusiva.',
    incorrect_answers: ['Delegada.', 'Prioritaria.'],
  },
  {
    id: '50',
    question:
      'El régimen jurídico en Canarias, en materia de servicios sociales, está conformado por\nuna prolija normativa en la materia, siendo actualmente la normativa de referencia:',
    category: trabajosocial,
    correct_answer:
      'Ley 16/2019, de 2 de mayo, de Servicios Sociales de Canarias.',
    incorrect_answers: [
      'Ley 16/2019, de 3 de mayo, de Servicios Sociales de Canarias.',
      'Ley 15/2019, de 2 de mayo, de Servicios Sociales de Canarias.',
    ],
  },
  {
    id: '51',
    question:
      'Crear, organizar y gestionar los servicios sociales de atención especializada para el\nacogimiento familiar, declaración de desamparo y constitución de la tutela de las personas\nmenores, es competencia de:',
    category: trabajosocial,
    correct_answer:
      'La Consejería competente en materia de Servicios Sociales.',
    incorrect_answers: [
      'Los Cabildos Insulares.',
      'El Consejo de Gobierno de Canarias.',
    ],
  },
  {
    id: '52',
    question:
      'Establecer los criterios y estándares mínimos de calidad, de los diversos servicios sociales\nes una competencia que corresponde:',
    category: trabajosocial,
    correct_answer: 'Al Consejo de Gobierno de Canarias',
    incorrect_answers: [
      'A la Consejería competente en materia de Servicios Sociales.',
      'Al Consejo General de Servicios Sociales.',
    ],
  },
  {
    id: '53',
    question:
      'Aprobar el Plan Estratégico de Servicios Sociales o cualquier otro instrumento de\nplanificación, y planes sectoriales de ámbito autonómico, compete al Consejo de Gobierno\nde Canarias quien habrá de remitirlo al Parlamento Autonómico para su pronunciamiento\nexpreso, teniendo en cuenta las propuestas de:',
    category: trabajosocial,
    correct_answer:
      'El Consejo General de Servicios Sociales y Conferencia Sectorial de Servicios\nSociales.',
    incorrect_answers: [
      'El Comité de Ética de Los Servicios Sociales',
      'Los Consejos Insulares y municipales de Servicios Sociales.',
    ],
  },
  {
    id: '54',
    question:
      'La financiación de los servicios sociales de atención primaria y comunitaria, se garantizarán\nmediante convenios de colaboración, entre las administraciones públicas competentes\nresponsables del sistema público Canario de Servicios Sociales:',
    category: trabajosocial,
    correct_answer: 'Preferentemente cuatrienales.',
    incorrect_answers: ['Anuales.', 'Preferentemente bianuales.'],
  },
  {
    id: '55',
    question:
      'El Gobierno de Canarias garantizará los porcentajes de financiación referidos en el art. 56\nde La Ley de Servicios Sociales de Canarias en relación a los servicios sociales de atención\nprimaria y comunitaria, desde la entrada en vigor de la Ley en el plazo de:',
    category: trabajosocial,
    correct_answer: 'Plazo máximo de doce años.',
    incorrect_answers: [
      'Plazo máximo de cuatro años',
      'Plazo máximo de un año.',
    ],
  },
  {
    id: '56',
    question:
      'Corresponde al Consejo General de Servicios Sociales, entre sus funciones:',
    category: trabajosocial,
    correct_answer:
      'El seguimiento y control de la ejecución de los planes y del catálogo de servicios y\nprestaciones.',
    incorrect_answers: [
      'Favorecer la colaboración y cooperación de las administraciones públicas canarias.',
      'Garantizar la coherencia, complementariedad y funcionamiento integrado del sistema\npúblico de servicios sociales.',
    ],
  },
  {
    id: '57',
    question:
      'Adscrito a la Consejería competente en materia de políticas sociales, el máximo órgano\nconsultivo y de participación en materia de servicios sociales en el ámbito de la Comunidad\nAutónoma de Canarias, es:',
    category: trabajosocial,
    correct_answer: 'El Consejo General de Servicios Sociales.',
    incorrect_answers: [
      'El Comité de Ética de los Servicios Sociales.',
      'La Conferencia Sectorial de Servicios Sociales.',
    ],
  },
  {
    id: '58',
    question:
      'Los Consejos Insulares y Municipales de Servicio Sociales, de acuerdo a la Ley Canaria de\nServicios Sociales, son:',
    category: trabajosocial,
    correct_answer: 'Órganos de participación.',
    incorrect_answers: [
      'Instrumentos de Coordinación Interadministrativa',
      'Estructuras de colaboración y cooperación de carácter social.',
    ],
  },
  {
    id: '59',
    question:
      'La composición, organización y funcionamiento del Consejo General de Servicios Sociales\nde Canarias, se regula reglamentariamente por:',
    category: trabajosocial,
    correct_answer: 'Decreto 5/1995, de 27 de enero',
    incorrect_answers: [
      'Decreto 8/1988, de 22 de enero.',
      'Decreto 8/1990, de 12 de enero.',
    ],
  },
  {
    id: '60',
    question:
      'De acuerdo con el artículo 1 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, el objeto de esta es (señalar la incorrecta):',
    category: trabajosocial,
    correct_answer:
      'Promover y garantizar el derecho de acceso a un sistema público de derechos sociales y\nhacer efectivo el derecho subjetivo a los servicios y prestaciones sociales de\nresponsabilidad privada.',
    incorrect_answers: [
      'Configurar un sistema público de servicios sociales.',
      'Ordenar y regular el papel de la iniciativa privada en materia de servicios sociales.',
    ],
  },
  {
    id: '61',
    question:
      'De acuerdo con el artículo 2 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, ésta es de aplicación a:',
    category: trabajosocial,
    correct_answer:
      'Las Administraciones Públicas de la Comunidad Autónoma de Canarias, las entidades\nvinculadas dependientes de estas, y las entidades privadas que colaboren con ellas en el\nmarco del sistema canario de servicios sociales.',
    incorrect_answers: [
      'Las Administraciones Públicas de la Comunidad Autónoma de Canarias y las entidades\nvinculadas dependientes de estas.',
      'Las Administraciones Públicas de la Comunidad Autónoma.',
    ],
  },
  {
    id: '62',
    question:
      'De acuerdo con el artículo 3 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, el derecho de acceso a las prestaciones del Sistema Público de Servicios Sociales\npuede ser reclamado:',
    category: trabajosocial,
    correct_answer: 'Vía administrativa y judicialmente',
    incorrect_answers: [
      'Vía administrativa exclusivamente.',
      'Exclusivamente vía contencioso administrativa.',
    ],
  },
  {
    id: '63',
    question:
      'De acuerdo con el artículo 3 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, el sistema público de servicios sociales de Canarias configura el derecho de\nacceso a las prestaciones de este como un derecho:',
    category: trabajosocial,
    correct_answer: 'Subjetivo.',
    incorrect_answers: ['Legitimo.', 'Objetivo.'],
  },
  {
    id: '64',
    question:
      'De acuerdo con el artículo 7 Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, son principios rectores del sistema público de servicios de Canarias:',
    category: trabajosocial,
    correct_answer: 'Planificación y evaluación.',
    incorrect_answers: [
      'Responsabilidad público - privada y universalidad.',
      'Equidad poblacional y proximidad.',
    ],
  },
  {
    id: '65',
    question:
      'De acuerdo con el artículo 8 Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, pueden ser titulares de servicios, recursos y centros de servicios sociales:',
    category: trabajosocial,
    correct_answer:
      'Las personas físicas y las personas jurídicas legalmente constituidas, de carácter público o\nprivado, que contemplen entre sus fines la prestación de servicios sociales.',
    incorrect_answers: [
      'Las personas físicas y jurídicas.',
      'Las administraciones públicas.',
    ],
  },
  {
    id: '66',
    question:
      'De acuerdo con el artículo 10 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, no es un derecho de las personas usuarias del sistema público de servicios\nsociales:',
    category: trabajosocial,
    correct_answer:
      'El recibir atención, siempre que lo requiera, en el propio domicilio familiar.',
    incorrect_answers: [
      'El acceso y seguimiento, por vía telemática, a su expediente.',
      'El conocer la valoración y diagnóstico técnico y a un itinerario individualizado de su\nsituación y del tipo de intervención que se les asigne y, dentro de los plazos que\nreglamentariamente se determinen, a disponer de la misma en un lenguaje claro y\ncomprensible.',
    ],
  },
  {
    id: '67',
    question:
      'El artículo 16 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de Canarias\nestablece que la actualización del catálogo de servicios y prestaciones se realizará:',
    category: trabajosocial,
    correct_answer: 'Al menos cada 2 años.',
    incorrect_answers: [
      'Al menos cada 3 años.',
      'No se establece ningún plazo.',
    ],
  },
  {
    id: '68',
    question:
      'Con carácter general el acceso al sistema público de servicios sociales, según establece el\nartículo 19 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de Canarias, tendrá lugar\na través de:',
    category: trabajosocial,
    correct_answer:
      'Los Servicios sociales de atención primaria y comunitaria.',
    incorrect_answers: [
      'El Servicio de Información, orientación y valoración',
      'Los Centros de Servicios Sociales',
    ],
  },
  {
    id: '69',
    question:
      'Conforme al artículo 24 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, son niveles de actuación del Sistema Público de Servicios Sociales de Canarias:',
    category: trabajosocial,
    correct_answer:
      'Servicios Sociales de Atención Primaria y Comunitaria y Servicios Sociales Especializados.',
    incorrect_answers: [
      'Los Servicios Sociales de Atención Básica y Servicios Sociales de Atención Especializada.',
      'Los Servicios Sociales de Atención Básica y Servicios Sociales Comunitarios.',
    ],
  },
  {
    id: '70',
    question:
      'Conforme al artículo 25 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias, la titularidad de los servicios sociales de atención primaria y comunitaria\ncorresponde:',
    category: trabajosocial,
    correct_answer: 'A los municipios.',
    incorrect_answers: ['A la provincia.', 'A la isla.'],
  },
  {
    id: '71',
    question:
      'De acuerdo con el artículo 25 de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de\nCanarias en qué nivel del sistema público de servicios sociales se sitúa el trabajador social\ncomo profesional de referencia:',
    category: trabajosocial,
    correct_answer:
      'En los servicios sociales de atención primaria y comunitaria.',
    incorrect_answers: [
      'En los servicios sociales especializados.',
      'Tanto en servicios sociales especializados como en atención primaria y comunitaria.',
    ],
  },
  {
    id: '72',
    question:
      'Entre las competencias municipales que establece el artículo 50 de la Ley 16/2019, de 2\nde mayo, de Servicios Sociales de Canarias, no se encuentra:',
    category: trabajosocial,
    correct_answer:
      'Gestionar las secciones municipales del registro único de entidades y servicios de su\námbito territorial.',
    incorrect_answers: [
      'Definir las áreas básicas de servicios sociales de su ámbito territorial.',
      'Participar en la elaboración del catálogo de servicios y prestaciones',
    ],
  },
  {
    id: '73',
    question:
      'La tasa de riesgo de pobreza y/o exclusión social AROPE se creó a efectos de medir la\npobreza relativa en Europa, en el año:',
    category: trabajosocial,
    correct_answer: '2010',
    incorrect_answers: ['2012', '2014'],
  },
  {
    id: '74',
    question:
      'La Tasa AROPE (nueva definición de 2021) se define como aquella población incluida en al\nmenos uno de estos criterios del riesgo de pobreza o exclusión social, que son:',
    category: trabajosocial,
    correct_answer:
      'Riesgo de pobreza, carencia material y social severa y baja intensidad en el empleo.',
    incorrect_answers: [
      'Riesgo de pobreza, carencia material y baja intensidad en el empleo.',
      'Riesgo de privación material y sinhogarismo.',
    ],
  },
  {
    id: '75',
    question:
      'De conformidad con el “XII Informe: El Estado de la pobreza en España. Seguimiento de\nlos indicadores de la Agenda UE 2030. 2015 – 2021. Canarias.”, el porcentaje de población\nen Canarias en riesgo de pobreza y/o exclusión social en el año 2021 fue del:',
    category: trabajosocial,
    correct_answer: '37,8%.',
    incorrect_answers: ['37,2%.', '37,5%.'],
  },
  {
    id: '76',
    question:
      'La Renta Canaria de Ciudadanía viene a sustituir la Prestación Canaria de Inserción (PCI),\nhabiendo quedado derogadas:',
    category: trabajosocial,
    correct_answer:
      'La Ley 1/2007, de 17 de enero, por la que se regula la prestación canaria de inserción, y sus\nmodificaciones legislativas; así como el Decreto 136/2007, de 24 de mayo, por el que se\naprueba el Reglamento de la Ley 1/2007, de 17 de enero, por la que se regula la prestación\ncanaria de inserción, y sus modificaciones reglamentarias.',
    incorrect_answers: [
      'Únicamente la Ley 1/2007, de 17 de enero, por la que se regula la prestación canaria de\ninserción',
      'Únicamente el Decreto 136/2007, de 24 de mayo, por el que se aprueba el Reglamento de\nla Ley 1/2007, de 17 de enero, por la que se regula la prestación canaria de inserción',
    ],
  },
  {
    id: '77',
    question:
      '¿Cuál es la resolución por la que se procede de oficio al traspaso de los expedientes de la Prestación Canaria de Inserción a la Renta Canaria de Ciudadanía?',
    category: trabajosocial,
    correct_answer:
      'La resolución del Director General de Derechos Sociales e Inmigración de 13 de abril de 2023.',
    incorrect_answers: [
      'La resolución del Director General de Derechos Sociales e Inmigración de 14 de febrero de 2023.',
      'La resolución del Director General de Derechos Sociales e Inmigración de 13 de marzo de 2023.',
    ],
  },
  {
    id: '78',
    question: 'En relación con la renta canaria de la ciudadanía:',
    category: trabajosocial,
    correct_answer:
      'Solo podrá concederse una prestación por unidad de convivencia.',
    incorrect_answers: [
      'Se podrán conceder tantas prestaciones como personas haya en la unidad de convivencia.',
      'Se concederán como máximo dos prestaciones por unidad de convivencia.',
    ],
  },
  {
    id: '79',
    question:
      'Si actualmente el ciudadano ya cobra la Prestación Canaria de Inserción, ¿debe solicitar la\nrenta canaria de ciudadanía?',
    category: trabajosocial,
    correct_answer:
      'No, se realizará de oficio un traspaso de nóminas por la Consejería de Derechos Sociales de\nla Comunidad Autónoma de Canarias.',
    incorrect_answers: [
      'Si, en el plazo de tres meses desde la entrada en vigor de la ley.',
      'Sí, no habiéndose establecido plazo para ello.',
    ],
  },
  {
    id: '80',
    question:
      'A efectos de la Ley 16/2019, de 2 de mayo, de Servicios Sociales de Canarias, se define la\nsituación de exclusión social:',
    category: trabajosocial,
    correct_answer:
      'Situación de pérdida de inclusión de las personas en el conjunto de la sociedad, que incluye\nno sólo la falta de ingresos económicos y su alejamiento del mercado de trabajo, sino\ntambién un debilitamiento de los lazos sociales, un descenso de la participación social y una\npérdida de derechos sociales.',
    incorrect_answers: [
      'Estado de grave carencia personal y familiar, por cuanto no pueden cubrir necesidades\nbásicas de alimentación y vivienda.',
      'Situación de vulnerabilidad o fragilidad al no percibir ningún recurso económico y haber\nagotado, igualmente, el resto de prestaciones del sistema público por razón de desempleo.',
    ],
  },
  {
    id: '81',
    question:
      'La Ley 5/2022, de 19 de diciembre, de la Renta Canaria de Ciudadanía, define las\nsituaciones de exclusión, vulnerabilidad social y pobreza, en su artículo:',
    category: trabajosocial,
    correct_answer: 'Artículo 3.',
    incorrect_answers: ['Artículo 1.', 'Artículo 2.'],
  },
  {
    id: '82',
    question:
      'El acceso a los programas y servicios de inclusión social y/o inserción laboral, de\nconformidad con el artículo 46 de la Ley de Renta Canaria de Ciudadanía, se iniciará:',
    category: trabajosocial,
    correct_answer:
      'Mediante diagnóstico social de los servicios sociales municipales',
    incorrect_answers: [
      'Directamente una vez reconocido el derecho a la renta de ciudadanía',
      'Una vez suscrito convenio de inclusión social',
    ],
  },
  {
    id: '83',
    question:
      'Mediante qué se hace efectivo el derecho a la atención de las personas en situación de\ndependencia:',
    category: trabajosocial,
    correct_answer:
      'Mediante la creación de un sistema para la Autonomía y Atención a la Dependencia, con la\ncolaboración y participación de todas las Administraciones Públicas y la garantía por la\nAdministración General del Estado en cualquier parte del territorio español.',
    incorrect_answers: [
      'Mediante atención directa y residencial según grado de dependencia y carta de servicios\nsegún requisitos de cada Comunidad Autónoma',
      'Mediante recursos adecuados a las necesidades personales según el grado de dependencia\nen cada Comunidad Autónoma.',
    ],
  },
  {
    id: '84',
    question:
      'La Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención\na las personas en situación de dependencia se fundamenta en los principios de:',
    category: trabajosocial,
    correct_answer: 'Universalidad, equidad y accesibilidad,',
    incorrect_answers: [
      'Participación, igualdad y protección social',
      'Sensibilización, protección y estadísticas',
    ],
  },
  {
    id: '85',
    question:
      '¿Cuál de las siguientes funciones NO es competencia municipal en materia de\ndependencia, según la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía\nPersonal y Atención a las personas en situación de dependencia?',
    category: trabajosocial,
    correct_answer:
      'Asegurar la elaboración de los correspondientes Programas Individuales de Atención.',
    incorrect_answers: [
      'Participar en la gestión de los servicios de atención a las personas en situación de\ndependencia, de acuerdo con la normativa de sus respectivas Comunidades Autónomas y\ndentro de las competencias que la legislación vigente les atribuye.',
      'Participar en el Consejo Territorial del Sistema para la Autonomía y Atención a la\ndependencia.',
    ],
  },
  {
    id: '86',
    question:
      'Marque cuál de las siguientes opciones NO se contempla como titular de derechos en la\nLey 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención a las\npersonas en situación de dependencia:',
    category: trabajosocial,
    correct_answer:
      'Menores de cinco años acreditados en situación de dependencia, con un periodo de\nresidencia superior a 3 años.',
    incorrect_answers: [
      'Residir en territorio español y haberlo hecho durante cinco años, de los cuales dos deberán\nser inmediatamente anteriores a la fecha de presentación de la solicitud.',
      'Menores de 3 años acreditados en situación de dependencia, de acuerdo a lo dispuesto en\nla disposición adicional decimotercera de la citada Ley.',
    ],
  },
  {
    id: '87',
    question:
      'En el Sistema para la Autonomía Personal y Atención a la Dependencia que recoge la Ley\n39/2006, las personas beneficiarias de las prestaciones de dependencia:',
    category: trabajosocial,
    correct_answer:
      'Participarán en la financiación de las prestaciones, según el tipo y coste del servicio y su\ncapacidad económica personal.',
    incorrect_answers: [
      'Participarán en la financiación del servicio, dependiendo, exclusivamente, del tipo de\nservicio que se le preste.',
      'Participarán sólo para dar información cuando así lo precise el Sistema de Dependencia.',
    ],
  },
  {
    id: '88',
    question:
      'La Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención\na las personas en situación de dependencia, ¿tiene como objeto regular las condiciones\nbásicas que garanticen la igualdad en el ejercicio del derecho subjetivo de ciudadanía a la\npromoción de la autonomía personal y atención a las personas en situación de\ndependencia, en los términos establecidos en las leyes?',
    category: trabajosocial,
    correct_answer: 'Verdadero',
    incorrect_answers: [
      'Falso',
      'Verdadero, siempre y cuando se aplique con criterios de gratuidad en la prestación de\nservicios',
    ],
  },
  {
    id: '89',
    question:
      '¿Qué organización definía a los cuidados de larga duración como el sistema de actividades\nllevados a cabo por cuidadores informales (familia, amigos o vecinos) o profesionales\n(sanitarios, sociales u otros), o ambos para conseguir que una persona que no sea\ntotalmente capaz de cuidar de sí misma mantenga la mejor calidad de vida posible, de\nacuerdo con sus preferencias individuales, realización personal y dignidad humana?',
    category: trabajosocial,
    correct_answer: 'La Organización Mundial de la Salud',
    incorrect_answers: [
      'La Organización Internacional de la Dependencia',
      'El Consejo de Europa',
    ],
  },
  {
    id: '90',
    question:
      'Según la Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y\nAtención a las personas en situación de dependencia, un menor extranjero no\nacompañado:',
    category: trabajosocial,
    correct_answer:
      'Podrá ser titular de los derechos recogidas en esa Ley conforme a lo establecido en las leyes\ndel menor vigentes, tanto en el ámbito estatal como en el autonómico, así como en los\ntratados internacionales.',
    incorrect_answers: [
      'No podrá ser titular de los derechos recogidas en esa Ley',
      'Solo podrá ser titular si acredita la residencia actual en territorio español al menos 1 año.',
    ],
  },
  {
    id: '91',
    question:
      'El programa individual de atención a las personas en situación de dependencia:',
    category: trabajosocial,
    correct_answer:
      'Será revisado con motivo del cambio de residencia a otra Comunidad Autónoma.',
    incorrect_answers: [
      'Será revisado anualmente',
      'Será revisado en la forma que determine y con la periodicidad que prevean las Cortes\nGenerales.',
    ],
  },
  {
    id: '92',
    question: 'Es un principio que inspira la Ley 39/2006, de 14 de diciembre:',
    category: trabajosocial,
    correct_answer: 'La personalización de la atención.',
    incorrect_answers: [
      'La separación de las personas dependientes del entorno en el que desarrollan su vida.',
      'La descentralización administrativa.',
    ],
  },
  {
    id: '93',
    question:
      'De conformidad la Ley 39/2006, de 14 de diciembre, la prioridad en el acceso a los\nservicios viene determinada en primer lugar por:',
    category: trabajosocial,
    correct_answer: 'El grado de dependencia.',
    incorrect_answers: [
      'La edad del solicitante.',
      'El tiempo que se encuentra en situación de dependencia.',
    ],
  },
  {
    id: '94',
    question:
      '¿Cuál de las siguientes NO es una competencia de los ayuntamientos según el artículo 12\nde la ley 1/1997, de 7 de febrero, de atención integral a los menores?',
    category: trabajosocial,
    correct_answer:
      'La prestación de los servicios especializados de atención al menor',
    incorrect_answers: [
      'La detección de situaciones de riesgo para los menores, en coordinación con los centros y\nunidades escolares y sanitarias de su ámbito territorial.',
      'La declaración de la situación de riesgo, adoptando las medidas necesarias para la\nprotección de los menores.',
    ],
  },
  {
    id: '95',
    question:
      'Cuando el órgano municipal competente dicta una resolución de declaración de la\nsituación de riesgo de un/a menor, éste la deberá notificar:',
    category: trabajosocial,
    correct_answer:
      'A quienes ejerzan las funciones parentales y comunicarse al órgano competente en\nmateria de atención a los menores de la Administración autonómica',
    incorrect_answers: [
      'A quienes ejerzan las funciones parentales, al servicio competente del Cabildo Insular y de\nla Comunidad Autónoma',
      'A quienes ejerzan las funciones parentales, comunicarse al órgano competente en materia\nde atención a los menores de la Administración autonómica y al Centro escolar.',
    ],
  },
  {
    id: '96',
    question:
      'Según la ley 1/1997, de 7 de febrero, de atención integral a los menores, las entidades22/28\nmunicipales de Canarias ejercerán las competencias que integran funciones de:',
    category: trabajosocial,
    correct_answer:
      'Información, promoción, detección, prevención e integración sociofamiliar de los/as\nmenores.',
    incorrect_answers: [
      'Información, promoción y desamparo de los/as menores.',
      'Información, prevención e integración en acogimiento sociofamiliar de los/as menores',
    ],
  },
  {
    id: '97',
    question:
      'Se considerará situación de desamparo de una persona menor de edad:',
    category: trabajosocial,
    correct_answer:
      'La que se produce de hecho a causa del incumplimiento, o del imposible o inadecuado\nejercicio de los deberes de protección establecidos por las leyes para la guarda de los\nmenores, cuando éstos queden privados de la necesaria asistencia moral o material.',
    incorrect_answers: [
      'La que se produce de hecho a causa del incumplimiento, o del imposible o inadecuado\nejercicio de los deberes de protección establecidos en exclusiva por la mujer gestante, por\nconsumo abusivo o trastorno mental, que pudiera perjudicar la vida del menor. En esta\nsituación el menor necesitaría asistencia moral, física y psicológica.',
      'Aquella en la que, a causa de circunstancias, carencias o conflictos familiares, sociales o\neducativos, la persona menor de edad se vea perjudicada en su desarrollo personal,\nfamiliar, social o educativo, en su bienestar o en sus derechos de forma que, sin alcanzar la\nentidad, intensidad o persistencia que fundamentarían su declaración de situación de\ndesamparo y la asunción de la tutela por ministerio de la ley, sea precisa la intervención de\nla administración pública competente, para eliminar, reducir o compensar las\ndificultades o inadaptación que le afectan y evitar su desamparo y exclusión social, sin tener\nque ser separado de su entorno familiar.',
    ],
  },
  {
    id: '98',
    question:
      'El artículo 13 del Estatuto de Autonomía de Canarias, en relación con los derechos de las\npersonas menores de edad, establece que:',
    category: trabajosocial,
    correct_answer:
      'Tendrán derecho a recibir la atención integral necesaria para el desarrollo de su\npersonalidad y su bienestar en el contexto familiar y social.',
    incorrect_answers: [
      'Tendrán derecho a recibir la atención integral necesaria para el desarrollo de su\npersonalidad y su bienestar en el contexto intrafamiliar, así como escolar.',
      'Tendrán derecho a recibir la atención integral necesaria para el desarrollo de su identidad\ny su bienestar en el contexto escolar.',
    ],
  },
  {
    id: '99',
    question:
      'De conformidad con el artículo 1 de la Ley Orgánica 8/2021, de 4 de junio, de protección\nintegral a la infancia y la adolescencia frente a la violencia, ésta tiene por objeto:',
    category: trabajosocial,
    correct_answer:
      'Garantizar los derechos fundamentales de los niños, niñas y adolescentes a su integridad\nfísica, psíquica, psicológica y moral frente a cualquier forma de violencia, asegurando el libre\ndesarrollo de su personalidad.',
    incorrect_answers: [
      'Garantizar exclusivamente los derechos fundamentales de los niños y adolescentes hasta los\n11 años, a su integridad física, psíquica, psicológica y moral frente a cualquier forma de\nviolencia, asegurando el libre desarrollo de su personalidad.',
      'Garantizar exclusivamente los derechos fundamentales de las niñas a su integridad física,\npsíquica, psicológica y moral frente a cualquier forma de violencia, asegurando el libre\ndesarrollo de su personalidad.',
    ],
  },
  {
    id: '100',
    question:
      'Según la Ley Orgánica 8/2021, de 4 de junio, de protección integral a la infancia y la\nadolescencia frente a la violencia, los equipos de intervención de los servicios sociales que\ntrabajen en el ámbito de la violencia sobre las personas menores de edad, deberán estar\nconstituidos, preferentemente, por:',
    category: trabajosocial,
    correct_answer:
      'Profesionales de la educación social, de la psicología y del trabajo social, y cuando sea\nnecesario de la abogacía, especializados en casos de violencia sobre la infancia y la\nadolescencia.',
    incorrect_answers: [
      'Profesionales de la educación social y del trabajo social, y cuando sea necesario de la\nlogopedia, especializados en casos de violencia sobre la infancia y la adolescencia.',
      'Profesionales de la educación social, de la psicología y del trabajo social, y de magisterio,\nespecializados en casos de violencia sobre la infancia y la adolescencia.',
    ],
  },
  {
    id: '101',
    question:
      'La resolución de inicio de un expediente de riesgo de un menor, según establece el\nReglamento del procedimiento para las Declaraciones de Riesgo de Menores del\nAyuntamiento de Santa Cruz de Tenerife se notificará a:',
    category: trabajosocial,
    correct_answer:
      'Progenitores y/o a quienes ejerzan las funciones parentales y al/la menor que tuviera juicio\nsuficiente o hubiera cumplido los 12 años de edad, en el plazo de 10 días desde la fecha de\nla misma. En el mismo plazo, la misma resolución se comunicará al órgano competente de\nla Administración de la Comunidad Autónoma de Canarias, así como al Ministerio Fiscal.',
    incorrect_answers: [
      'Progenitores y/o a quienes ejerzan las funciones parentales en el plazo de 10 días desde la\nfecha de la misma y en el plazo de 20 días se comunicará al Ministerio Fiscal.',
      'Progenitores y/o a quienes ejerzan las funciones parentales y al/la menor que tuviera juicio\nsuficiente o hubiera cumplido los 12 años de edad, en el plazo de 10 días desde la fecha de\nla misma. En el plazo de 30 días, la misma resolución se comunicará al órgano competente\nde la Administración de la Comunidad Autónoma de Canarias.',
    ],
  },
  {
    id: '102',
    question:
      'La finalidad de la ley 1/1997, de 7 de febrero, de atención integral a los menores es:',
    category: trabajosocial,
    correct_answer:
      'Garantizar la atención integral a los menores en el ámbito de la Comunidad Autónoma de\nCanarias.',
    incorrect_answers: [
      'Garantizar la dotación de recursos y servicios en las distintas administraciones para llevar a\ncabo las medidas de prevención de situaciones de riesgo y de amparo en el ámbito de la\nComunidad Autónoma de Canarias.',
      'Garantizar la distribución de funciones y competencias de atención a los menores de las\nAdministraciones Públicas canarias.',
    ],
  },
  {
    id: '103',
    question:
      'Según establece el artículo 22 de la Ley Orgánica 8/2021, las administraciones\npúblicas promoverán, en el ámbito de sus competencias, campañas y acciones concretas\nde información evaluables y basadas en la evidencia, destinadas a concienciar a la\nsociedad acerca del derecho de los niños, niñas y adolescentes a recibir un buen trato.\nEstas campañas se realizarán de modo:',
    category: trabajosocial,
    correct_answer: 'Accesible, diferenciando por tramos de edad.',
    incorrect_answers: [
      'Accesible, diferenciando por tramos de tiempo.',
      'Privado, diferenciado por niveles.',
    ],
  },
  {
    id: '104',
    question:
      'Se considera que el/la menor se encuentra en situación de riesgo cuando:',
    category: trabajosocial,
    correct_answer:
      'A causa de sus circunstancias personales, familiares o por influencias de su entorno, se está\nperjudicando su desarrollo personal o social, sin alcanzar la gravedad suficiente para\njustificar la declaración de desamparo y la separación del menor de su familia.',
    incorrect_answers: [
      'A causa de sus circunstancias personales, familiares o por influencias de su entorno, no se\nestá perjudicando su desarrollo personal o social, y no hay gravedad suficiente para justificar\nla separación del menor de su familia.',
      'a causa de sus circunstancias familiares, se está perjudicando su desarrollo personal o social,\nalcanzado la gravedad suficiente para la separación del menor de su familia.',
    ],
  },
  {
    id: '105',
    question:
      'En las situaciones de riesgo, la actuación administrativa se dirigirá a procurar las\nnecesidades básicas del menor, mejorando su medio familiar, y, concretamente, se\norientará a obtener:',
    category: trabajosocial,
    correct_answer:
      'La disminución de los factores de riesgo y la promoción de los factores de protección del\nmenor y su familia, así como el seguimiento de la evolución del menor en su familia',
    incorrect_answers: [
      'Exclusivamente el seguimiento de la evolución de la persona menor de edad en el ámbito\nescolar.',
      'La promoción de la salud de la familia.',
    ],
  },
  {
    id: '106',
    question:
      'Según el artículo 26 de la Ley Orgánica 8/2021, de 4 de junio, las administraciones\npúblicas deberán proporcionar a las familias el apoyo necesario para prevenir desde la\nprimera infancia factores de riesgo y fortalecer los factores de protección, así como apoyar\nla labor educativa y protectora con medidas que deberán estar enfocadas a:',
    category: trabajosocial,
    correct_answer:
      'Adoptar programas dirigidos a la promoción de formas positivas de aprendizaje, así como\na erradicar el castigo con violencia física o psicológica en el ámbito familiar.',
    incorrect_answers: [
      'Crear los servicios no esenciales de información y apoyo profesional a los niños, niñas y\nadolescentes a fin de que no tengan la capacidad necesaria para detectar precozmente y rechazar cualquier forma de violencia, con especial atención a los problemas de las niñas y\nadolescentes que por género y edad sean víctimas de cualquier tipo de discriminación\ndirecta o indirecta.',
      'Establecer un programa de formación educativa en la línea con la actividad docente clásica\ndel artículo 27 de la Constitución, aprobado por profesorado y profesionales del magisterio.',
    ],
  },
  {
    id: '107',
    question:
      'La Ley 3/1996 de 11 de julio, de participación de las personas mayores y de la\nsolidaridad entre generaciones tiene por objeto:',
    category: trabajosocial,
    correct_answer:
      'Crear un sistema de participación social y de protección de los derechos de los mayores\nresidentes en Canarias a través del Consejo Canario de los Mayores.',
    incorrect_answers: [
      'Regular el sistema de ayudas económicas que le corresponden a los mayores residentes en\nCanarias a través del Consejo Canario de los Mayores.',
      'Apoyar un sistema alternativo de autoempleo para personas mayores residentes en\nCanarias a través del Consejo Canario de los Mayores.',
    ],
  },
  {
    id: '108',
    question:
      'En Canarias el instrumento de participación activa de las personas mayores en la vida\ncomunitaria y, especialmente, en la defensa de sus derechos y calidad de vida; cuyo objeto\nes materializar la colaboración y participación del movimiento asociativo de las personas\nmayores en las políticas de atención, inserción social y calidad de vida es:',
    category: trabajosocial,
    correct_answer: 'Consejo Canario de los Mayores',
    incorrect_answers: [
      'Consejo Regional de mayores de Canarias',
      'Consejo Canario de la Tercera Edad',
    ],
  },
  {
    id: '109',
    question:
      'Los Servicios Sociales dirigidos a las personas mayores en España se pueden englobar\nen cuatro grandes categorías:',
    category: trabajosocial,
    correct_answer:
      'Servicios de Atención Domiciliaria, de Atención Diurna, de Atención Residencial y de\nParticipación Social.',
    incorrect_answers: [
      'Servicios de Atención Preventiva, de Atención Permanente, de Atención temprana y de\nAtención Semi-Permanente.',
      'Servicios de Atención Diurna, de Atención Nocturna, de Atención Domiciliaria y de\nAtención Permanente.',
    ],
  },
  {
    id: '110',
    question:
      'El Consejo Estatal de las Personas Mayores es un órgano colegiado de carácter asesor\ny consultivo de la Administración General del Estado y tiene, entre otras, las siguientes\nfunciones:',
    category: trabajosocial,
    correct_answer:
      'Fomentar el desarrollo del asociacionismo y la participación de las personas mayores en la\nsociedad.',
    incorrect_answers: [
      'Establecer sistemas de cooperación entre los poderes privados y las organizaciones\nsindicales.',
      'Ninguna de las anteriores es correcta.',
    ],
  },
  {
    id: '111',
    question:
      'El edadismo se refiere a la forma de pensar (estereotipos), sentir (prejuicios) y actuar\n(discriminación) con respecto a los demás o a nosotras/os mismas/os por razón de la edad.\nHay tres estrategias que funcionan para reducir o eliminar el edadismo, según la\nOrganización Mundial de la Salud:',
    category: trabajosocial,
    correct_answer:
      'Las políticas y la legislación, las actividades educativas y las intervenciones\nintergeneracionales.',
    incorrect_answers: [
      'Las políticas y la legislación, las actividades deportivas y las intervenciones\nintergeneracionales',
      'Las intervenciones educativas, las actividades deportivas y las intervenciones sociales.',
    ],
  },
  {
    id: '112',
    question:
      'Según la Ordenanza Municipal reguladora de la prestación del Servicio de Ayuda a\nDomicilio del Excmo. Ayuntamiento de Santa Cruz de Tenerife es causa de extinción del\nServicio de Ayuda a Domicilio:',
    category: trabajosocial,
    correct_answer:
      'Superar el periodo de suspensión temporal (seis meses) sin reanudarse el servicio, excepto\ningreso hospitalario.',
    incorrect_answers: [
      'No abonar el importe de la tarifa exigible, en el plazo establecido.',
      'Traslado temporal de la persona beneficiaria a casa de familiares u otras personas allegadas.',
    ],
  },
  {
    id: '113',
    question:
      'El servicio de teleasistencia que contempla la Ley 39/2006, de 14 de diciembre, de\nPromoción de la Autonomía Personal y Atención a las personas en situación de\ndependencia es compatible con:',
    category: trabajosocial,
    correct_answer:
      'El servicio de prevención de las situaciones de dependencia, de promoción de la autonomía\npersonal, de ayuda a domicilio y de centro de día y de noche.',
    incorrect_answers: [
      'Los servicios de atención residencial y los alojamientos especiales.',
      'La prestación económica para cuidados en el entorno familiar.',
    ],
  },
  {
    id: '114',
    question:
      'Ley 39/2006, de 14 de diciembre, de Promoción de la Autonomía Personal y Atención\na las personas en situación de dependencia, señala que el servicio de ayuda a domicilio\nlo constituye el conjunto de actuaciones llevadas a cabo en el domicilio de las personas en\nsituación de dependencia con el fin de atender sus necesidades de la vida diaria, prestadas\npor entidades o empresas, acreditadas para esta función, y podrán ser los siguientes:',
    category: trabajosocial,
    correct_answer:
      'Servicios relacionados con la atención personal en la realización de las actividades de la vida\ndiaria y servicios relacionados con la atención de las necesidades domésticas o del hogar.',
    incorrect_answers: [
      'Servicios relacionados solo con la atención de las necesidades domésticas o del hogar.',
      'Servicios exclusivamente de atención personal en la realización de las actividades diarias de\nhigiene personal.',
    ],
  },
  {
    id: '115',
    question:
      'El envejecimiento saludable lo define la Organización Mundial de la Salud como ‘el\nproceso de fomentar y mantener la capacidad funcional que permite el bienestar en la\nvejez’. La capacidad funcional está determinada por:',
    category: trabajosocial,
    correct_answer:
      'La capacidad intrínseca de una persona (o sea, sus capacidades físicas y mentales), el\nentorno en el que vive (entendido en el sentido más amplio e incluidos los entornos físicos,\nsociales y políticos) y la integración entre esos elementos.',
    incorrect_answers: [
      'La capacidad intrínseca de una persona (o sea, sus capacidades físicas y mentales) y el\nentorno en el que nace (entendido en el sentido más amplio).',
      'La capacidad extrínseca de una persona y el entorno en el que vive (entendido en el sentido\nmás amplio e incluidos los entornos físicos, sociales y sindicales)',
    ],
  },
  {
    id: '116',
    question:
      '¿Cuál es un órgano consultivo de participación institucional del Sistema para la\nAutonomía y Atención a la Dependencia?',
    category: trabajosocial,
    correct_answer: 'El Consejo Estatal de Personas Mayores.',
    incorrect_answers: [
      'El Consejo Internacional de la Discapacidad',
      'El Consejo Internacional de Personas Mayores',
    ],
  },
  {
    id: '117',
    question:
      'El texto Refundido de la Ley General de Derechos de las Personas con Discapacidad y\nde su Inclusión Social, aprobado mediante Real Decreto Legislativo 1/2013, de 29 de\nnoviembre establece que son personas con discapacidad:',
    category: trabajosocial,
    correct_answer:
      'Aquellas que presentan deficiencias físicas, mentales, intelectuales o sensoriales,\nprevisiblemente permanentes que, al interactuar con diversas barreras, puedan impedir su\nparticipación plena y efectiva en la sociedad, en igualdad de condiciones con los demás.',
    incorrect_answers: [
      'Aquellas cuyas posibilidades de integración educativa, laboral o social se hallen disminuidas\ncomo consecuencia de una deficiencia, previsiblemente permanente, de carácter congénito\no no, en sus capacidades físicas, psíquicas o sensoriales.',
      'Aquellas que tengan reconocido un grado de minusvalía superior al 66%.',
    ],
  },
  {
    id: '118',
    question:
      'El principio en virtud del cual las personas con discapacidad deben poder llevar\nuna vida en igualdad de condiciones, accediendo a los mismos lugares, ámbitos, bienes y\nservicios que están a disposición de cualquier otra persona es:',
    category: trabajosocial,
    correct_answer: 'Normalización',
    incorrect_answers: ['Inclusión social', 'Accesibilidad universal'],
  },
  {
    id: '119',
    question:
      'De acuerdo con el Real Decreto Legislativo 1/2013, de 29 de noviembre, tendrán la\nconsideración de personas con discapacidad aquellas a quienes se les haya reconocido un\ngrado de discapacidad:',
    category: trabajosocial,
    correct_answer: 'Igual o superior al 33 por ciento.',
    incorrect_answers: [
      'Superior al 33 por ciento.',
      'Igual o superior al 50 por ciento.',
    ],
  },
  {
    id: '120',
    question:
      'Las calificaciones y valoraciones de los equipos multiprofesionales de calificación y\nreconocimiento del grado discapacidad responderá a:',
    category: trabajosocial,
    correct_answer:
      'Criterios técnicos unificados, basados en la evidencia disponible, y tendrán validez ante\ncualquier organismo público y en todo el territorio del Estado',
    incorrect_answers: [
      'Criterios técnicos unificados, basados en la evidencia disponible, y tendrán validez ante\ncualquier organismo público solo en el territorio de la Comunidad Autónoma.',
      'Criterios técnicos unificados, basados en la evidencia disponible, y tendrán validez ante\ncualquier organismo público únicamente en el municipio de residencia de la persona con\ndiscapacidad.',
    ],
  },
  {
    id: '121',
    question:
      'Según el Real Decreto 888/2022, de 18 de octubre, por el que se establece el\nprocedimiento para el reconocimiento, declaración y calificación del grado de\ndiscapacidad, ¿a quién corresponde el reconocimiento y revisión de grado de discapacidad\nasí como el reconocimiento de la necesidad de concurso de otra persona para realizar los\nactos esenciales de la vida diaria, así como de la dificultad para utilizar transportes\npúblicos colectivos, a efectos de las prestaciones, servicios o beneficios públicos\nestablecidos?',
    category: trabajosocial,
    correct_answer:
      'Corresponderá a los órganos competentes de las comunidades autónomas.',
    incorrect_answers: [
      'Corresponderá a los órganos competentes del municipio.',
      'Corresponderá a los órganos competentes de la administración estatal.',
    ],
  },
  {
    id: '122',
    question:
      'La Administración competente podrá acordar la tramitación urgente del procedimiento\nde reconocimiento de grado de discapacidad, de oficio o a instancia de la persona\ninteresada, con o sin medidas de apoyo para el ejercicio de su capacidadjurídica,\ncuando concurran razones de interés público que así lo aconsejen, entre otras las\nrelacionadas con:',
    category: trabajosocial,
    correct_answer:
      'La salud, la violencia de género, la esperanza de vida u otras de índole humanitaria.',
    incorrect_answers: [
      'La salud, la esperanza de vida u otras de índole humanitaria.',
      'La salud, la violencia de género u otras de índole humanitaria.',
    ],
  },
  {
    id: '123',
    question:
      'La competencia de resolver sobre el reconocimiento de la situación de dependencia y\nla aprobación del correspondiente programa individual de atención que determine los\nservicios y prestaciones que puedan corresponder a la persona interesada, según la Ley\n16/2019, de 2 de mayo, de Servicios Sociales de Canarias.',
    category: trabajosocial,
    correct_answer:
      'Corresponde a la consejería competente en materia de servicios sociales del Gobierno de\nCanarias',
    incorrect_answers: [
      'Corresponde al Consejo Municipal de Servicios sociales',
      'Corresponde al Comité de Ética de los Servicios Sociales.',
    ],
  },
  {
    id: '124',
    question:
      'Toda conducta no deseada relacionada con la discapacidad de una persona, que\ntenga como objetivo o consecuencia atentar contra su dignidad o crear un entorno\nintimidatorio, hostil, degradante, humillante u ofensivo se denomina:',
    category: trabajosocial,
    correct_answer: 'Acoso.',
    incorrect_answers: ['Discriminación indirecta.', 'Discriminación directa.'],
  },
  {
    id: '125',
    question:
      'El principio en virtud del cual las actuaciones que desarrollan las Administraciones\nPúblicas no se limitan únicamente a planes, programas y acciones específicos, pensados\nexclusivamente para las personas con discapacidad, sino que comprenden las políticas y\nlíneas de acción de carácter general en cualquiera de los ámbitos de actuación pública, en\ndonde se tendrán en cuenta las necesidades y demandas de las personas con discapacidad',
    category: trabajosocial,
    correct_answer:
      'Transversalidad de las políticas en materia de discapacidad',
    incorrect_answers: [
      'Diseño universal o diseño para todas las personas',
      'Medidas de acción positiva',
    ],
  },
  {
    id: '126',
    question:
      'De acuerdo con los planteamientos del modelo universal de explicación de la\ndiscapacidad, las políticas sociales se deberán hacer considerando que:',
    category: trabajosocial,
    correct_answer:
      'Todas las personas pueden tener en algún momento una discapacidad',
    incorrect_answers: [
      'Es necesario hacer políticas diferentes según se dirijan a las personas con o sin\ndiscapacidad',
      'Solo algunas personas tienen discapacidad por lo que deben de ser prioritarias',
    ],
  },
  {
    id: '127',
    question:
      'La Administración competente, según el Real Decreto 888/2022, de 18 de octubre,\npor el que se establece el procedimiento para el reconocimiento, declaración y\ncalificación del grado de discapacidad ¿cuándo dictará y notificará resolución sobre el\nreconocimiento del grado de discapacidad?',
    category: trabajosocial,
    correct_answer:
      'En el plazo máximo de seis meses a contar desde la fecha de presentación de la solicitud',
    incorrect_answers: [
      'En el plazo máximo de seis meses a contar desde la fecha de evaluación',
      'En el plazo máximo de tres meses a contar desde la fecha de presentación de la solicitud',
    ],
  },
  {
    id: '128',
    question:
      'A efectos de lo establecido en el Real Decreto Legislativo 1/2013, de 29 de\nnoviembre, la Accesibilidad universal:',
    category: trabajosocial,
    correct_answer:
      'Es la condición que deben cumplir los entornos, procesos, bienes, productos y servicios, así\ncomo los objetos, instrumentos, herramientas y dispositivos, para ser comprensibles,\nutilizables y practicables por todas las personas en condiciones de seguridad y comodidad y\nde la forma más autónoma y natural posible.',
    incorrect_answers: [
      'Es la actividad por la que se conciben o proyectan desde el origen, y siempre que ello sea\nposible, entornos, procesos, bienes, productos, servicios, objetos, instrumentos, programas,\ndispositivos o herramientas, de tal forma que puedan ser utilizados por todas las personas,\nen la mayor extensión posible, sin necesidad de adaptación ni diseño especializado.',
      'Es el principio en virtud del cual las personas con discapacidad deben poder llevar una vida\nen igualdad de condiciones, accediendo a los mismos lugares, ámbitos, bienes y servicios\nque están a disposición de cualquier otra persona.',
    ],
  },
  {
    id: '129',
    question:
      'Según el modo de percepción de las prestaciones económicas de asistencia social del\nExcmo. Ayuntamiento de Santa Cruz de Tenerife, estás podrán ser:',
    category: trabajosocial,
    correct_answer: 'Directas o Indirectas.',
    incorrect_answers: [
      'En efectivo o en especie.',
      'A corto o a largo plazo.',
    ],
  },
  {
    id: '130',
    question:
      'A los efectos de ponderar la insuficiencia de recursos económicos de las personas\nbeneficiarias de las prestaciones económicas de Asistencia Social del Excmo.\nAyuntamiento de Santa Cruz de Tenerife, se toma como referente:',
    category: trabajosocial,
    correct_answer:
      'El Indicador Público de Renta de Efectos Múltiples (IPREM)vigente',
    incorrect_answers: [
      'La cuantía del Salario Mínimo (SMI) vigente',
      'La cuantía de Renta Garantizada (RCC) vigente',
    ],
  },
  {
    id: '131',
    question:
      'Por las especiales circunstancias de emergencia social y/o necesidad que motivan el\nderecho a las prestaciones económicas de asistencia social del Excmo. Ayuntamiento de\nSanta Cruz de Tenerife, las personas beneficiarias quedan exoneradas del cumplimiento\nde:',
    category: trabajosocial,
    correct_answer:
      'La obligación de no hallarse al corriente en el cumplimiento de obligaciones tributarias o\nfrente a la Seguridad Social.',
    incorrect_answers: [
      'La obligación de someterse a las actuaciones de comprobación.',
      'La obligación de conservar los documentos justificativos.',
    ],
  },
  {
    id: '132',
    question:
      'Los importes máximos para los distintos conceptos de las prestaciones económicas de\nasistencia social del Excmo. Ayuntamiento de Santa Cruz de Tenerife,',
    category: trabajosocial,
    correct_answer:
      'Los importes máximos para los distintos conceptos de ayudas, serán los que se detallan enel Anexo Único de las Bases Reguladoras.',
    incorrect_answers: [
      'Se determinan anualmente en las Bases de Ejecución del Presupuesto General del\nAyuntamiento.',
      'No se contemplan importes máximos para los distintos conceptos.',
    ],
  },
  {
    id: '133',
    question:
      'El plazo de presentación de solicitudes de prestaciones económicas de asistencia\nsocial del Excmo. Ayuntamiento de Santa Cruz de Tenerife es:',
    category: trabajosocial,
    correct_answer:
      'No se determina plazo para la presentación de solicitudes.',
    incorrect_answers: [
      'Del 1 de enero y hasta el 31 de octubre de cada año natural',
      'Del 1 de marzo y hasta el 31 de diciembre de cada año natural.',
    ],
  },
  {
    id: '134',
    question:
      'En las Bases reguladoras de las prestaciones económicas de asistencia social del\nExcmo. Ayuntamiento de Santa Cruz de Tenerife, se entenderá, con carácter general, por\nunidad familiar a la unidad de convivencia en los términos fijados en:',
    category: trabajosocial,
    correct_answer:
      'El artículo 4 de la Ley 1/2007, de 17 de enero, reguladora de la Prestación Canaria de\nInserción.',
    incorrect_answers: [
      'El artículo 9 de la Ley 16/2019, de 2 de mayo de Servicios Sociales de Canarias.',
      'El artículo 9, de la Ley 1/2007, de 17 de enero, reguladora de la Prestación Canaria de\nInserción.',
    ],
  },
  {
    id: '135',
    question:
      'Las prestaciones económicas de asistencia social del Excmo. Ayuntamiento de Santa\nCruz de Tenerife, orientadas a atender gastos de suministros del hogar, tienen la\nconsideración de:',
    category: trabajosocial,
    correct_answer: 'Prestaciones destinadas a atender necesidades básicas',
    incorrect_answers: [
      'Prestaciones orientadas a atender necesidades derivadas del desarrollo de programas de\nintervención.',
      'Prestaciones orientadas a atender necesidades extraordinarias.',
    ],
  },
  {
    id: '136',
    question:
      'Las prestaciones económicas de asistencia social del Excmo. Ayuntamiento de Santa\nCruz de Tenerife, orientadas a evitar desahucios o a facilitar el acceso a la vivienda en\nsituaciones de carencia real o potencial, tienen la consideración de:',
    category: trabajosocial,
    correct_answer: 'Prestaciones destinadas a atender necesidades básicas',
    incorrect_answers: [
      'Prestaciones orientadas a atender necesidades extraordinarias',
      'Prestaciones orientadas a atender necesidades derivadas del desarrollo de programas de\nintervención',
    ],
  },
  {
    id: '137',
    question:
      'En los casos de iniciación de oficio, corresponde la iniciación del expediente\nadministrativo para la concesión de las prestaciones económicas de asistencia social del\nExcmo. Ayuntamiento de Santa Cruz de Tenerife.',
    category: trabajosocial,
    correct_answer:
      'A la Presidencia del Instituto Municipal de Atención Social.',
    incorrect_answers: [
      'A la Dirección-Gerencia del Instituto Municipal de Atención Social.',
      'A la Alcaldía Presidencia del Excmo. Ayuntamiento de Santa Cruz de Tenerife.',
    ],
  },
  {
    id: '138',
    question:
      'En los casos iniciados a petición de persona interesada, la solicitud de la prestación\neconómica de asistencia social del Excmo. Ayuntamiento de Santa Cruz de Tenerife, será\nnecesario:',
    category: trabajosocial,
    correct_answer:
      'Habrá de formalizarse en modelo normalizado y visado por trabajador/a social del IMAS.',
    incorrect_answers: [
      'Habrá de formalizarse en modelo de solicitud genérica del Ayuntamiento.',
      'Habrá de formalizarse en modelo normalizado.',
    ],
  },
  {
    id: '139',
    question:
      'El plazo ordinario para la presentación de documentación de control `para verificar\nque las prestaciones han sido destinadas al fin para el que resultaron concedidas, será de:',
    category: trabajosocial,
    correct_answer:
      'Un (1) mes, contados a partir de la percepción de la ayuda por parte de la persona\nbeneficiara.',
    incorrect_answers: [
      'Quince (15) días, contados a partir de la percepción de la ayuda por parte de la persona\nbeneficiara.',
      'Tres (3) meses, contados a partir de la percepción de la ayuda por parte de la persona\nbeneficiara.',
    ],
  },
  {
    id: '140',
    question:
      '¿A partir de qué plazo, se entenderá desestimada la solicitud de prestación\neconómica de asistencia social del Excmo. Ayuntamiento de Santa Cruz de Tenerife, en\ncaso de que no recaiga resolución expresa?',
    category: trabajosocial,
    correct_answer: 'Tres meses',
    incorrect_answers: ['Seis meses', 'Dos meses.'],
  },
  {
    id: '141',
    question:
      'Las Bases específicas que regulan las ayudas individuales para personas con\ndiscapacidad y menores en proceso de obtener dicha calificación en el municipio de Santa\nCruz de Tenerife publicadas en el BOP nº 99/2021 de 18 de agosto tienen por objeto:',
    category: trabajosocial,
    correct_answer:
      'Regular las condiciones para la concesión de las ayudas individuales para personas con\ndiscapacidad y los menores de edad que estén en proceso de obtenerla y que carezcan de\nrecursos económicos suficientes y que reúnan, además, los requisitos establecidos en la\nBase 4ª de las citadas bases.',
    incorrect_answers: [
      'Regular las condiciones para la concesión de las ayudas individuales para personas con\ndiscapacidad y los menores de edad solamente cuando ya cuenten con dicha calificación y\nque carezcan de recursos económicos suficientes y que reúnan, además, los requisitos\nestablecidos en la Base 5ª da las citas bases.',
      'Regular las condiciones para la concesión de las ayudas individuales para personas con\ndiscapacidad y los menores de edad que estén en proceso de obtenerla y que tengan recursos económicos suficientes y que reúnan, además, los requisitos establecidos en la\nBase 6ª de las citadas bases.',
    ],
  },
  {
    id: '142',
    question:
      'Las Bases específicas que regulan las ayudas individuales para personas con\ndiscapacidad y menores en proceso de obtener dicha calificación en el municipio de Santa\nCruz de Tenerife, indican que el modo de percepción de las ayudas, por la persona\nbeneficiaria, podrán ser de las siguientes clases:',
    category: trabajosocial,
    correct_answer: 'Directas o indirectas.',
    incorrect_answers: [
      'En efectivo o en especie.',
      'A corto o a largo plazo.',
    ],
  },
  {
    id: '143',
    question:
      '¿En las Bases específicas que regulan las ayudas individuales para personas con\ndiscapacidad y menores en proceso de obtener dicha calificación en el municipio de Santa\nCruz de Tenerife, existen límites en las cuantías?',
    category: trabajosocial,
    correct_answer:
      'Sí existen unos importes máximos para los distintos tipos y conceptos de ayudas y se\nestablecen en el Anexo I de las Bases.',
    incorrect_answers: [
      'No hay importes máximos para los distintos tipos y conceptos de ayuda.',
      'Sí existen unos importes máximos para los distintos tipos y conceptos de ayudas si bien no\nse establecen los mismos en las Bases.',
    ],
  },
  {
    id: '144',
    question:
      'Señala cuál de los siguientes requisitos NO se contempla que deben reunir las\npersonas solicitantes de las ayudas individuales para personas con discapacidad y\nmenores en proceso de obtener dicha calificación en el municipio de Santa Cruz de\nTenerife:',
    category: trabajosocial,
    correct_answer:
      'Estar empadronadas y ser residente en el municipio de Santa Cruz de Tenerife.',
    incorrect_answers: [
      'No disponer la persona solicitante ni su unidad familiar de ingresos netos per cápita\nsuperiores a (2) veces el Indicador Público de Renta de Efectos Múltiples vigente para cada\nejercicio presupuestario',
      'Ostentar la condición legal de personas con discapacidad con una antigüedad de al menos\ndos años anteriores a la solicitud de la ayuda',
    ],
  },
  {
    id: '145',
    question:
      'En las ayudas individuales para personas con discapacidad y menores en proceso de\nobtener dicha calificación, tienen la consideración de Ayudas Básicas aquellas que se\nencuentran destinadas a la cobertura de las siguientes prestaciones:',
    category: trabajosocial,
    correct_answer:
      'Ayudas básicas de rehabilitación, de asistencia especializada, de accesibilidad y movilidad y\nayudas para la formación, la recuperación formativa e inclusión laboral.',
    incorrect_answers: [
      'Ayudas básicas de rehabilitación, de asistencia especializada, de accesibilidad y movilidad y\nayudas para comedor escolar',
      'Ayudas básicas de rehabilitación, de asistencia especializada, de accesibilidad y movilidad y\nayudas para la asistencia fuera de la isla',
    ],
  },
  {
    id: '146',
    question:
      'Señala qué concepto se incluye en la modalidad de ayudas básicas de asistencia\nespecializadas, en las ayudas individuales para personas con discapacidad y menores en\nproceso de obtener dicha calificación del Ayuntamiento de Santa Cruz de Tenerife:',
    category: trabajosocial,
    correct_answer:
      'Desempeño y mejora del desarrollo de la autonomía personal.',
    incorrect_answers: [
      'Aumento de la capacidad de desplazamiento y movilidad de la persona con discapacidad',
      'Comunicación y potenciación de las relaciones con el entorno.',
    ],
  },
  {
    id: '147',
    question:
      'En las ayudas individuales para personas con discapacidad y menores en proceso de\nobtener dicha calificación dentro de las ayudas básicas de accesibilidad y movilidad en la\nmodalidad de eliminación de barreras físicas:',
    category: trabajosocial,
    correct_answer:
      'No podrán concederse ayudas por el mismo tipo de adaptación, en un período de cinco años,\nsalvo que en dicho plazo se hayan modificado negativamente las circunstancias que sirvieron\nde base a la concesión de la anterior subvención',
    incorrect_answers: [
      'No podrán concederse ayudas por el mismo tipo de adaptación, en un periodo de 10 años,\nsalvo que en dicho plazo se hayan modificado negativamente las circunstancias que sirvieron\nde base a la concesión de la anterior subvención',
      'Sí podrán concederse ayudas por el mismo tipo de adaptación sin que haya trascurrido\nperiodo alguno ni se hayan modificado negativamente las circunstancias que sirvieron de\nbase a la concesión de la anterior subvención',
    ],
  },
  {
    id: '148',
    question:
      'El plazo de presentación de solicitudes de las ayudas individuales para personas con\ndiscapacidad y menores en proceso de obtener dicha calificación del municipio de Santa\nCruz de Tenerife, se encontrará anualmente abierto en el periodo de tiempo comprendido\nentre:',
    category: trabajosocial,
    correct_answer: 'El 1 de marzo y el 31 de octubre de cada año natural.',
    incorrect_answers: [
      'El 1 de enero y el 31 de octubre de cada año natural.',
      'El 1 de julio y el 31 de diciembre de cada año natural.',
    ],
  },
  {
    id: '149',
    question:
      'Para la concesión de las ayudas económicas para personas con discapacidad y\nmenores en proceso de obtener dicha calificación del Ayuntamiento de Santa Cruz de\nTenerife, el informe técnico emitido por el/la trabajador/a social competente en materia\nde atención a personas con discapacidad:',
    category: trabajosocial,
    correct_answer: 'Es preceptivo',
    incorrect_answers: [
      'No es preceptivo ni vinculante',
      'No es preceptivo, pero si vinculante',
    ],
  },
  {
    id: '150',
    question:
      'Corresponde la ordenación e instrucción de los expedientes de concesión de las\nayudas económicas para personas con discapacidad y menores en proceso de obtener\ndicha calificación del Ayuntamiento de Santa Cruz de Tenerife a:',
    category: trabajosocial,
    correct_answer: 'La Sección de Programas Sectorial- Discapacidad.',
    incorrect_answers: [
      'La Sección de Programas Comunitarios- Discapacidad',
      'La Sección de Igualdad- Discapacidad',
    ],
  },
]

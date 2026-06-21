(function () {

  // ── Translations ──────────────────────────────────────────────────────────
  // Keys are added progressively as each page is updated.
  var T = {
    es: {
      // ── Compartidos (header / footer) ──────────────────
      'hdr.title':  'Instrucciones de Recogida de Muestras',
      'hdr.sub':    'Para donantes a domicilio',
      'footer':     '\u00a9 2026 \u2014 Instrucciones de Recogida de Muestras para Donantes',

      // ── index.html ─────────────────────────────────────
      'idx.welcome.h2': 'Bienvenido/a',
      'idx.welcome.p':  'Selecciona el tipo de donación que te corresponde según las indicaciones que has recibido del equipo. Cada opción te mostrará las instrucciones específicas para tu caso.',
      'idx.btn1.h2': 'Donación inicial',
      'idx.btn1.p':  'Recogida de orina, lágrima, saliva, mucosa nasal y preparación del paquete',
      'idx.btn2.h2': 'Donación estándar',
      'idx.btn2.p':  'Recogida de orina, lágrima, mucosa nasal y preparación del paquete',
      'idx.poster.btn':  '📄 Descargar cartel con QR',
      'idx.poster.gen':  'Generando…',
      // Cartel PDF
      'poster.kicker':   'INSTRUCCIONES PARA LA RECOGIDA DE MUESTRAS',
      'poster.title1':   'Donación inicial',
      'poster.title2':   'Donación estándar',
      'poster.cta':      'Escanea el código QR con tu móvil',
      'poster.body':     'Accede a las instrucciones detalladas, paso a paso, para realizar correctamente la recogida de tus muestras en casa y preparar el paquete para su envío.',
      'poster.hint':     'Abre la cámara de tu teléfono, apunta al código y pulsa el enlace que aparece.',
      'poster.url':      'O escribe esta dirección en tu navegador:',
      'poster.footer':   'Si tienes cualquier duda, contacta con el equipo investigador.',
      'poster.phone':    'Teléfono del equipo: +34 618 68 29 20',

      // ── con-saliva.html / sin-saliva.html ──────────────
      'cs.h2':    'Donación inicial',
      'ss.h2':    'Donación estándar',
      'sel.intro': 'Esta página contiene toda la información que necesitas para realizar correctamente la recogida de tus muestras en casa. Te recomendamos leer primero las instrucciones para <strong>Preparar el Paquete</strong>, porque en él se desglosan los contenidos de la caja de muestras y qué hacer con los mismos. Después, selecciona cada tipo de muestra que debes recoger y sigue las instrucciones paso a paso. Si tienes alguna duda, contacta con el equipo.',

      // ── Tarjetas de muestra (compartidas) ──────────────
      'card.orina.h3':    'Orina',
      'card.orina.p':     'Instrucciones para la recogida de muestra de orina',
      'card.lagrima.h3':  'Lágrima',
      'card.lagrima.p':   'Instrucciones para la recogida de muestra de lágrima',
      'card.saliva.h3':   'Saliva',
      'card.saliva.p':    'Instrucciones para la recogida de muestra de saliva',
      'card.nasal.h3':    'Secreción Nasal',
      'card.nasal.p':     'Instrucciones para la recogida de secreción nasal',
      'card.paquete.h3':  'Preparar el Paquete',
      'card.paquete.p':   'Cómo preparar y empaquetar las muestras para su recogida',
      'card.btn':         'Ver instrucciones',

      // ── orina.html ─────────────────────────────────────
      'back':       '\u2190 Volver',
      'ori.fig1':   'Bote con tapa roja \u2014 llenar hasta la marca superior (\u2248100 ml)',
      'ori.h2':     'Recogida de Orina',
      'ori.intro':  'En el paquete recibido encontrar\u00e1 un recipiente para la recogida de orina con <strong>tapa roja</strong>, etiquetado con su nombre completo. Se necesitan entre <strong>75 y 100 ml</strong> de orina. Tambi\u00e9n encontrar\u00e1 una bolsa con cierre f\u00e1cil para su almacenamiento.',
      'ori.alert':  '<strong>\u26a0\ufe0f Importante: planificaci\u00f3n del env\u00edo</strong> La muestra debe ser recogida por el transportista <strong>al d\u00eda siguiente</strong> de haberla tomado. No tome la muestra un s\u00e1bado ni cuando no pueda estar disponible al d\u00eda siguiente para entregarla. Avise a Joaqu\u00edn Castilla con antelaci\u00f3n para que organice la recogida. Si tiene dudas, encontrar\u00e1 instrucciones m\u00e1s detalladas sobre c\u00f3mo planificar el env\u00edo en la secci\u00f3n de <strong><a href="#" onclick="history.back();return false;" style="color:#92400e;">Preparaci\u00f3n del Paquete</a></strong>.',
      'ori.tip1':   '\ud83d\udca1 De ser posible, recoja la muestra cuando lleve <strong>al menos 2 horas sin orinar</strong>. No es necesario que sea la primera orina del d\u00eda.',
      'ori.steps':  '\u2705 Instrucciones paso a paso',
      'ori.s1':     'Con las <strong>manos lavadas</strong> con agua y jab\u00f3n, abra el bote de tapa roja tocando lo menos posible la boca del bote y la superficie interior de la tapa. Deje la tapa boca arriba.',
      'ori.s2':     'Orine en el bote hasta pr\u00e1cticamente llenarlo (<strong>hasta la marca superior</strong>, aproximadamente 100 ml).',
      'ori.fig2':   'Llenar hasta la marca superior al menos',
      'ori.s3':     'Si no pudiera llenarlo de una sola vez, conserve la muestra en la <strong>nevera (refrigerado)</strong> y acabe de llenarlo m\u00e1s tarde, siempre dentro del <strong>mismo d\u00eda</strong>. Puede ir recogiendo muestras a lo largo del d\u00eda.',
      'ori.s4':     'Cuando el bote est\u00e9 lleno hasta la marca, <strong>ci\u00e9rrelo</strong>, intr\u00f3dúzcalo en la bolsa de pl\u00e1stico con cierre f\u00e1cil (incluida en el paquete) y cons\u00e9rvelo <strong>refrigerado en la nevera</strong> hasta el env\u00edo.',
      'ori.tip2':   '\ud83d\udccc Recuerde: una vez avise a Joaqu\u00edn Castilla, el transportista pasar\u00e1 a recogerlo al d\u00eda siguiente.',

      // ── nasal.html ─────────────────────────────────────
      'nas.fig1':   'Escobill\u00f3n introducido 1.5\u20133 cm en la fosa nasal y rotado 5 veces. Mismo escobill\u00f3n para ambas fosas.',
      'nas.h2':     'Recogida de Secreci\u00f3n Nasal',
      'nas.intro':  'En el paquete encontrar\u00e1 un <strong>tubo de rosca largo con tapa roja</strong>, con un escobill\u00f3n pegado a la propia tapa del tubo.',
      'nas.steps':  '\u2705 Instrucciones paso a paso',
      'nas.s1':     'L\u00e1vese bien las manos con agua y jab\u00f3n y <strong>s\u00e9queselas muy bien</strong> antes de manipular el tubo y el escobill\u00f3n.',
      'nas.tip1':   '\ud83d\udca1 Si tiene mucha congesti\u00f3n nasal, <strong>su\u00e9nese antes</strong> de tomar la muestra.',
      'nas.s2':     'Con las manos limpias y secas, <strong>abra la tapa de rosca</strong> que tiene enganchado el escobill\u00f3n. Agarre siempre por la tapa, <strong>sin tocar el escobill\u00f3n</strong> con las manos ni apoyarlo en ninguna superficie.',
      'nas.s3':     'Eche la cabeza <strong>ligeramente hacia atr\u00e1s</strong> e introduzca el escobill\u00f3n en una de las fosas nasales entre <strong>1,5 y 3 cm</strong> (llegando al fondo de la fosa, pero sin hacer fuerza).',
      'nas.badge':  '\ud83d\udccf Profundidad: 1,5 \u2013 3 cm',
      'nas.s4':     '<strong>Rote suavemente el escobill\u00f3n unas 5 veces</strong> en esa fosa nasal. Luego repita la misma operaci\u00f3n en la <strong>otra fosa nasal</strong>, utilizando el <strong>mismo escobill\u00f3n</strong>.',
      'nas.s5':     'Introduzca el escobill\u00f3n de vuelta en su <strong>tubo original</strong> y <strong>cierre bien la tapa</strong> de rosca.',
      'nas.s6':     'Meta el tubo bien cerrado en la <strong>bolsa de pl\u00e1stico original</strong> y <strong>refrigere la muestra</strong> en la nevera hasta su env\u00edo junto con el resto de las muestras.',

      // ── lagrima.html ───────────────────────────────────
      'lag.fig1':  'Colocaci\u00f3n de la tira adsorbente bajo el p\u00e1rpado inferior, cerca del rabillo',
      'lag.h2':    'Recogida de L\u00e1grima',
      'lag.kit':   '\ud83d\udccb Material incluido en el paquete',
      'lag.kit1':  '2 tiras adsorbentes<br/>(en sobres)',
      'lag.kit2':  '2 tubos con tapas<br/>de goma',
      'lag.kit3':  'Par de guantes<br/>de l\u00e1tex',
      'lag.alert': '<strong>\u26a0\ufe0f Antes de empezar</strong> La recogida debe hacerse <strong>sin ning\u00fan maquillaje en los ojos</strong>, ya que podr\u00eda contaminar la muestra. Si tiene inflamaci\u00f3n, \u00falcera en la c\u00f3rnea o cualquier otro problema ocular, no realice esta recogida y consulte al equipo investigador.',
      'lag.steps': '\u2705 Instrucciones paso a paso',
      'lag.s1':    'P\u00f3ngase los <strong>guantes de l\u00e1tex</strong> antes de abrir los sobres que contienen las tiras de papel adsorbente.',
      'lag.s2':    'Con los guantes puestos, abra uno de los sobres y haga una <strong>peque\u00f1a doblez en el extremo redondeado</strong> de la tira. Evite manosearla; suj\u00e9tela por la parte inferior.',
      'lag.s3':    'Eche la cabeza <strong>ligeramente hacia atr\u00e1s</strong>, mire hacia arriba y tire suavemente del p\u00e1rpado inferior hacia abajo. Coloque la parte doblada de la tira <strong>debajo del p\u00e1rpado, hacia el rabillo del ojo</strong> (molesta menos cerca del rabillo que del lagrimal).',
      'lag.fig2':  'P\u00e1rpado inferior bajado \u2014 tira colocada hacia el rabillo',
      'lag.s4':    'Una vez colocada, puede <strong>cerrar el ojo o mantenerlo abierto</strong>, parpadeando suavemente para que la tira no se caiga mientras se empapa de fluido lagrimal.',
      'lag.s5':    'Mantenga la tira en el ojo hasta que se haya <strong>empapado completamente o durante aproximadamente 5 minutos</strong>.',
      'lag.s6':    'Retire la tira suavemente agarr\u00e1ndola por el extremo inferior e intr\u00f3dúzcala en el <strong>tubo de pl\u00e1stico</strong> (d\u00f3blela si es necesario para que entre del todo). Cierre bien la tapa.',
      'lag.s7':    'Repita la misma operaci\u00f3n con la <strong>segunda tira en el otro ojo</strong>.',
      'lag.s8':    'Una vez guardadas las dos tiras en sus tubos, deseche los guantes y meta los tubos cerrados en el <strong>congelador</strong>. Mant\u00e9ngalos congelados hasta el env\u00edo.',
      'lag.video': '<strong>\u00bfNecesita un ejemplo visual?</strong><br/>Puede ver un v\u00eddeo demostrativo del proceso en el siguiente enlace:<br/><br/><a href="https://www.youtube.com/watch?v=Sn2lqhk_IYc" target="_blank" rel="noopener noreferrer" style="color:#5b21b6; font-weight:700; text-decoration:underline;">\u25b6 Schirmer test \u2014 ver v\u00eddeo</a>',

      // ── saliva.html ────────────────────────────────────
      'sal.fig1':  'Kit de recogida de saliva \u2014 llenar hasta la l\u00ednea \u201cFILL TO\u201d',
      'sal.h2':    'Recogida de Saliva',
      'sal.intro': 'En el paquete encontrar\u00e1 una <strong>cajita de pl\u00e1stico</strong> con un tubo de recolecci\u00f3n con boquilla ancha y un dep\u00f3sito de l\u00edquido adjunto, m\u00e1s un tap\u00f3n suelto para el cierre final. Con esta saliva se extraer\u00e1 posteriormente su <strong>ADN</strong>.',
      'sal.alert': '<strong>\u26a0\ufe0f Antes de empezar</strong><ul style="margin:6px 0 0 18px;padding:0;"><li>No coma, beba, fume ni mastique chicle al menos <strong>30 minutos antes</strong>. Las part\u00edculas o qu\u00edmicos pueden dificultar la extracci\u00f3n del ADN.</li><li><strong>No retire</strong> el cierre de pl\u00e1stico de la tapa de la boquilla antes de usarlo para no perder el l\u00edquido interior.</li></ul>',
      'sal.steps': '\u2705 Instrucciones paso a paso',
      'sal.time':  'El proceso puede llevar entre 2 y 5 minutos seg\u00fan cada persona.',
      'sal.s1':    'Saque el tubo de recolecci\u00f3n con la boquilla acoplada de la caja de pl\u00e1stico. <strong>Agarre siempre por el tubo</strong>, no por la boquilla, para evitar contaminarla.',
      'sal.s2':    'Acumule saliva en la boca durante unos segundos y vaya <strong>escupi\u00e9ndola en la boquilla</strong> hasta que la saliva (el l\u00edquido, <em>no las burbujas</em>) alcance la <strong>l\u00ednea de llenado</strong> marcada en el tubo (\u201cFILL TO\u201d).',
      'sal.fig2':  'S\u00f3lo cuenta el l\u00edquido, no las burbujas',
      'sal.s3':    'Mantenga el tubo <strong>en posici\u00f3n vertical</strong> y, con la otra mano, cierre la tapa de la boquilla pres\u00e1ndola hasta escuchar un <strong>\u201cclic\u201d</strong>.',
      'sal.s4':    'Manteniendo el tubo vertical, <strong>desenrosque la boquilla</strong> (con la tapa ya cerrada) y des\u00e9chela directamente a la basura.',
      'sal.s5':    'Utilice el <strong>tap\u00f3n peque\u00f1o suelto</strong> para cerrar firmemente el tubo, sin tocar la boca del tubo directamente con las manos.',
      'sal.s6':    'Con el tubo bien cerrado, <strong>ag\u00edtelo durante 5\u201310 segundos</strong> para que se mezclen bien la saliva y el l\u00edquido de la tapa.',
      'sal.s7':    'Pegue la <strong>etiqueta autoadhesiva</strong> (pegada a la cajita de pl\u00e1stico) con su nombre, c\u00f3digo de barras y c\u00f3digo del Biobanco sobre el tubo. Vuelva a colocar el tubo en su cajita de pl\u00e1stico original.',
      'sal.s8':    'Meta la caja de pl\u00e1stico en el <strong>sobre acolchado peque\u00f1o</strong> (ya viene con la etiqueta de destino a la atenci\u00f3n de \u00c1frica Manero) y cons\u00e9rvela a <strong>temperatura ambiente</strong> hasta la recogida. No hace falta refrigerar esta muestra.',
      'sal.tip8':  '\ud83d\udccc <strong>Env\u00edo conjunto (varios familiares):</strong> Si han recibido varios kits, meta todas las cajitas en un sobre acolchado grande o en la misma caja en la que las recibieron, usando la etiqueta grande de destino incluida a la atenci\u00f3n de \u00c1frica Manero.',

      // ── paquete.html / paquete-sin-saliva.html ─────────
      'pak.h2':      'Instrucciones para el Paquete y Env\u00edo',
      'pak.intro':   'A continuaci\u00f3n se detalla todo el proceso que debe seguir para la toma de muestras, as\u00ed como para su env\u00edo.',
      'pak.alert':   '<strong>\u26a0\ufe0f Importante</strong> Este mismo paquete le ser\u00e1 recogido en la direcci\u00f3n postal indicada por usted cuando haya realizado la toma de muestras, por lo que <strong>trate de da\u00f1arlo lo m\u00ednimo posible</strong> y no descarte ning\u00fan contenido, ya que la mayor\u00eda de elementos deber\u00e1n ser devueltos tal y como se indica en este documento.',
      'pak.contents':'📋 Contenido del paquete de porexp\u00e1n',
      'pak.li1':     'Sobre acolchado con la direcci\u00f3n de destino (abierto), a la atenci\u00f3n de <strong>\u00c1frica Manero Ru\u00edz de Azua</strong>, para el env\u00edo de la muestra de saliva.',
      'pak.li2':     'Acumulador de fr\u00edo (frigol\u00edn o bolsa de gel para congelar), que mantendr\u00e1 las muestras refrigeradas en el env\u00edo de vuelta. Lo debe haber recibido <strong>descongelado</strong> (a temperatura ambiente).',
      'pak.li3':     'Pl\u00e1stico de burbujas, para evitar el contacto directo entre las muestras y la bolsa de gel congelada, y proteger las muestras durante el env\u00edo.',
      'pak.li4':     'Bote con tapa roja etiquetado con su nombre y apellidos, para la muestra de orina.',
      'pak.li5':     'Bolsa de pl\u00e1stico con cierre f\u00e1cil, para introducir el bote de orina una vez tomada la muestra.',
      'pak.li6':     'Bolsa de pl\u00e1stico con las tiras de papel para recogida de l\u00e1grima, 2 tubos con tapa de rosca para su almacenamiento, y un par de guantes de l\u00e1tex desechables.',
      'pak.li7':     'Tubo de pl\u00e1stico con escobill\u00f3n para toma de muestra de mucosa nasal.',
      'pak.li8':     'C\u00f3digo QR impreso para acceder a las instrucciones de toma de muestras y env\u00edo, y <strong>etiqueta autoadhesiva</strong> con la direcci\u00f3n de env\u00edo del paquete tras la recogida de muestras, a nombre de Carol Arist\u00edmu\u00f1o.',
      'pak.steps':   '\u2705 Instrucciones paso a paso',
      'pak.s1':      'Extraiga todo el contenido del paquete y <strong>escanee el c\u00f3digo QR</strong> que le dirigir\u00e1 a las instrucciones para la toma de muestras y preparaci\u00f3n y env\u00edo del paquete.',
      'pak.s2':      'Meta el acumulador de fr\u00edo (frigol\u00edn o bolsa de gel) en el <strong>congelador</strong> para tenerlo preparado el d\u00eda que tenga que preparar el paquete con las muestras.',
      'pak.s3':      'Lea las instrucciones para la toma de muestra de <strong>saliva, orina, l\u00e1grimas y mucosa nasal</strong> con detenimiento y planifique la toma de muestras de acuerdo con las indicaciones.',
      'pak.s3alert': '<strong>\u26a0\ufe0f Importante: planificaci\u00f3n del env\u00edo</strong> Las muestras deben enviarse <strong>al d\u00eda siguiente de su toma</strong>. No realice la toma de muestras en s\u00e1bado, ya que la recogida no podr\u00e1 hacerse en domingo. As\u00edg\u00farese adem\u00e1s de estar disponible para entregar el paquete al transportista en su domicilio al d\u00eda siguiente de la toma.',
      'pak.s4':      'Cuando haya planificado la toma de muestras, deber\u00e1 <strong>informar a Joaqu\u00edn Castilla un d\u00eda antes</strong> para que organice la recogida y env\u00ede al transportista al d\u00eda y direcci\u00f3n indicados por usted.',
      'pak.s5':      'Una vez avisado Joaqu\u00edn Castilla y tomadas las muestras de orina (que deben <strong>conservarse refrigeradas</strong> hasta la preparaci\u00f3n del paquete), l\u00e1grima (<strong>congelar</strong> hasta su env\u00edo), mucosa nasal (<strong>conservar refrigerado</strong>) y saliva (<strong>no requiere refrigeraci\u00f3n</strong>), prepare la caja de porexp\u00e1n, a poder ser <strong>el mismo d\u00eda de la recogida</strong> o como pronto la noche anterior.',
      'pak.s6intro': 'Introduzca en la caja de porexp\u00e1n blanco los siguientes elementos, <strong>en este orden</strong>:',
      'pak.s6li1':   '\ud83e\uddca Acumulador de fr\u00edo (frigol\u00edn o bolsa de gel) <strong>congelado</strong>, en el fondo.',
      'pak.s6li2':   '\ud83e\udde7 Pl\u00e1stico de burbujas, entre el acumulador de fr\u00edo y las muestras.',
      'pak.s6li3':   '\u2709\ufe0f Sobre acolchado (a la atenci\u00f3n de \u00c1frica Manero) con la cajita de pl\u00e1stico con la muestra de saliva debidamente etiquetada.',
      'pak.s6li4':   '\ud83d\ude9d Muestra de orina en su correspondiente bolsa de cierre f\u00e1cil, cerrada.',
      'pak.s6li5':   '\ud83d\udc41\ufe0f Muestras de l\u00e1grimas en sus tubos con tap\u00f3n de rosca y en su bolsita de pl\u00e1stico.',
      'pak.s6li6':   '\ud83d\udc43 Muestra de mucosa nasal en su correspondiente bolsa de pl\u00e1stico.',
      'pak.s7':      '<strong>Cierre</strong> la caja de porexp\u00e1n con precinto o cinta de embalar, pegue la <strong>etiqueta de direcci\u00f3n</strong> (a la atenci\u00f3n de Carol Arist\u00edmu\u00f1o, del Biobanco Vasco) en el exterior, y entregue la caja al transportista encargado de la recogida.',
      'pak.note':    '<strong>\ud83d\udccc Nota</strong> Si no dispone de cinta de embalar, com\u00fanicaselo a Joaqu\u00edn Castilla para que el transportista lleve este material cuando vaya a recoger el paquete.',

      // ── paquete-sin-saliva.html (diferencias) ──────────
      'pss.s3':      'Lea las instrucciones para la toma de muestra de <strong>orina, l\u00e1grimas y mucosa nasal</strong> con detenimiento y planifique la toma de muestras de acuerdo con las indicaciones.',
      'pss.s5':      'Una vez avisado Joaqu\u00edn Castilla y tomadas las muestras de orina (que deben <strong>conservarse refrigeradas</strong> hasta la preparaci\u00f3n del paquete), l\u00e1grima (<strong>congelar</strong> hasta su env\u00edo) y mucosa nasal (<strong>conservar refrigerado</strong>), prepare la caja de porexp\u00e1n, a poder ser <strong>el mismo d\u00eda de la recogida</strong> o como pronto la noche anterior.'
    },
    en: {
      // ── Compartidos (header / footer) ──────────────────
      'hdr.title':  'Sample Collection Instructions',
      'hdr.sub':    'For at-home donors',
      'footer':     '\u00a9 2026 \u2014 Sample Collection Instructions for Donors',

      // ── index.html ─────────────────────────────────────
      'idx.welcome.h2': 'Welcome',
      'idx.welcome.p':  'Select the donation type that applies to you based on the instructions you have received from the team. Each option will show you the specific instructions for your case.',
      'idx.btn1.h2': 'Initial Donation',
      'idx.btn1.p':  'Collection of urine, tear, saliva, nasal mucosa and package preparation',
      'idx.btn2.h2': 'Standard Donation',
      'idx.btn2.p':  'Collection of urine, tear, nasal mucosa and package preparation',
      'idx.poster.btn':  '📄 Download QR poster',
      'idx.poster.gen':  'Generating…',
      // PDF poster
      'poster.kicker':   'SAMPLE COLLECTION INSTRUCTIONS',
      'poster.title1':   'Initial Donation',
      'poster.title2':   'Standard Donation',
      'poster.cta':      'Scan the QR code with your phone',
      'poster.body':     'Access the detailed, step-by-step instructions to correctly collect your samples at home and prepare the package for shipment.',
      'poster.hint':     'Open your phone camera, point it at the code and tap the link that appears.',
      'poster.url':      'Or type this address into your browser:',
      'poster.footer':   'If you have any questions, please contact the research team.',
      'poster.phone':    'Team phone: +34 618 68 29 20',

      // ── con-saliva.html / sin-saliva.html ──────────────
      'cs.h2':    'Initial Donation',
      'ss.h2':    'Standard Donation',
      'sel.intro': 'This page contains all the information you need to correctly collect your samples at home. We recommend reading the <strong>Package Preparation</strong> instructions first, as they describe the contents of the sample box and what to do with each item. Then select each sample type you need to collect and follow the step-by-step instructions. If you have any questions, contact the team.',

      // ── Sample cards (shared) ───────────────────────────
      'card.orina.h3':    'Urine',
      'card.orina.p':     'Instructions for urine sample collection',
      'card.lagrima.h3':  'Tear',
      'card.lagrima.p':   'Instructions for tear sample collection',
      'card.saliva.h3':   'Saliva',
      'card.saliva.p':    'Instructions for saliva sample collection',
      'card.nasal.h3':    'Nasal Secretion',
      'card.nasal.p':     'Instructions for nasal secretion collection',
      'card.paquete.h3':  'Prepare the Package',
      'card.paquete.p':   'How to prepare and package the samples for collection',
      'card.btn':         'View instructions',

      // ── orina.html ─────────────────────────────────────
      'back':       '\u2190 Back',
      'ori.fig1':   'Red-capped container \u2014 fill to the upper mark (\u2248100 ml)',
      'ori.h2':     'Urine Collection',
      'ori.intro':  'In the package you received you will find a urine collection container with a <strong>red cap</strong>, labelled with your full name. You need between <strong>75 and 100 ml</strong> of urine. You will also find a zip-lock bag for storage.',
      'ori.alert':  '<strong>\u26a0\ufe0f Important: scheduling the shipment</strong> The sample must be collected by the courier <strong>the day after</strong> you take it. Do not collect the sample on a Saturday or when you cannot be available the next day to hand it over. Notify Joaqu\u00edn Castilla in advance so he can arrange the pick-up. If in doubt, you will find more detailed instructions on how to plan the shipment in the <strong><a href="#" onclick="history.back();return false;" style="color:#92400e;">Package Preparation</a></strong> section.',
      'ori.tip1':   '\ud83d\udca1 If possible, collect the sample when you have gone <strong>at least 2 hours without urinating</strong>. It does not need to be first-morning urine.',
      'ori.steps':  '\u2705 Step-by-step instructions',
      'ori.s1':     'With <strong>hands washed</strong> with soap and water, open the red-capped container touching the opening and the inner surface of the cap as little as possible. Leave the cap face up.',
      'ori.s2':     'Urinate into the container until it is almost full (<strong>up to the upper mark</strong>, approximately 100 ml).',
      'ori.fig2':   'Fill at least to the upper mark',
      'ori.s3':     'If you cannot fill it in one go, keep the sample in the <strong>fridge (refrigerated)</strong> and top it up later, always within the <strong>same day</strong>. You can collect samples throughout the day.',
      'ori.s4':     'Once the container is filled to the mark, <strong>close it</strong>, place it in the zip-lock bag (included in the package) and keep it <strong>refrigerated in the fridge</strong> until shipment.',
      'ori.tip2':   '\ud83d\udccc Remember: once you notify Joaqu\u00edn Castilla, the courier will come to collect it the next day.',

      // ── nasal.html ─────────────────────────────────────
      'nas.fig1':   'Swab inserted 1.5\u20133 cm into the nostril and rotated 5 times. Same swab for both nostrils.',
      'nas.h2':     'Nasal Secretion Collection',
      'nas.intro':  'In the package you will find a <strong>long screw-cap tube with a red cap</strong>, with a swab attached to the inside of the cap.',
      'nas.steps':  '\u2705 Step-by-step instructions',
      'nas.s1':     'Wash your hands thoroughly with soap and water and <strong>dry them very well</strong> before handling the tube and the swab.',
      'nas.tip1':   '\ud83d\udca1 If you have a lot of nasal congestion, <strong>blow your nose first</strong> before collecting the sample.',
      'nas.s2':     'With clean, dry hands, <strong>unscrew the cap</strong> that has the swab attached. Always hold it by the cap, <strong>without touching the swab</strong> with your hands or resting it on any surface.',
      'nas.s3':     'Tilt your head <strong>slightly back</strong> and insert the swab into one nostril between <strong>1.5 and 3 cm</strong> (reaching the back of the nostril, but without forcing it).',
      'nas.badge':  '\ud83d\udccf Depth: 1.5 \u2013 3 cm',
      'nas.s4':     '<strong>Gently rotate the swab about 5 times</strong> inside that nostril. Then repeat the same procedure in the <strong>other nostril</strong>, using the <strong>same swab</strong>.',
      'nas.s5':     'Place the swab back into its <strong>original tube</strong> and <strong>screw the cap on firmly</strong>.',
      'nas.s6':     'Place the tightly closed tube in the <strong>original plastic bag</strong> and <strong>refrigerate the sample</strong> in the fridge until shipment together with the rest of the samples.',

      // ── lagrima.html ───────────────────────────────────
      'lag.fig1':  'Placement of the absorbent strip under the lower eyelid, near the outer corner',
      'lag.h2':    'Tear Collection',
      'lag.kit':   '\ud83d\udccb Material included in the package',
      'lag.kit1':  '2 absorbent strips<br/>(in envelopes)',
      'lag.kit2':  '2 tubes with<br/>rubber caps',
      'lag.kit3':  'A pair of<br/>latex gloves',
      'lag.alert': '<strong>\u26a0\ufe0f Before you start</strong> Collection must be done <strong>without any eye make-up</strong>, as it could contaminate the sample. If you have inflammation, a corneal ulcer or any other eye problem, do not perform this collection and consult the research team.',
      'lag.steps': '\u2705 Step-by-step instructions',
      'lag.s1':    'Put on the <strong>latex gloves</strong> before opening the envelopes containing the absorbent paper strips.',
      'lag.s2':    'With gloves on, open one of the envelopes and make a <strong>small fold at the rounded end</strong> of the strip. Avoid handling it too much; hold it by the lower part.',
      'lag.s3':    'Tilt your head <strong>slightly back</strong>, look upward and gently pull the lower eyelid down. Place the folded end of the strip <strong>under the eyelid, towards the outer corner</strong> (it is less uncomfortable near the outer corner than near the inner corner).',
      'lag.fig2':  'Lower eyelid pulled down \u2014 strip placed towards the outer corner',
      'lag.s4':    'Once in place, you may <strong>close your eye or keep it open</strong>, blinking gently to prevent the strip from falling out while it absorbs the tear fluid.',
      'lag.s5':    'Keep the strip in your eye until it is <strong>fully soaked or for approximately 5 minutes</strong>.',
      'lag.s6':    'Gently remove the strip by grasping it at the lower end and place it in the <strong>plastic tube</strong> (fold it if necessary so it fits completely). Close the cap firmly.',
      'lag.s7':    'Repeat the same procedure with the <strong>second strip in the other eye</strong>.',
      'lag.s8':    'Once both strips are stored in their tubes, discard the gloves and place the closed tubes in the <strong>freezer</strong>. Keep them frozen until shipment.',
      'lag.video': '<strong>Need a visual example?</strong><br/>You can watch a demonstration video of the process at the following link:<br/><br/><a href="https://www.youtube.com/watch?v=Sn2lqhk_IYc" target="_blank" rel="noopener noreferrer" style="color:#5b21b6; font-weight:700; text-decoration:underline;">\u25b6 Schirmer test \u2014 watch video</a>',

      // ── saliva.html ────────────────────────────────────
      'sal.fig1':  'Saliva collection kit \u2014 fill up to the \u201cFILL TO\u201d line',
      'sal.h2':    'Saliva Collection',
      'sal.intro': 'In the package you will find a <strong>small plastic box</strong> with a wide-mouth collection tube with an attached liquid reservoir, plus a loose stopper for the final seal. This saliva will later be used to extract your <strong>DNA</strong>.',
      'sal.alert': '<strong>\u26a0\ufe0f Before you start</strong><ul style="margin:6px 0 0 18px;padding:0;"><li>Do not eat, drink, smoke or chew gum for at least <strong>30 minutes beforehand</strong>. Particles or chemicals can make DNA extraction more difficult.</li><li><strong>Do not remove</strong> the plastic seal from the mouthpiece cap before use, as you may lose the liquid inside.</li></ul>',
      'sal.steps': '\u2705 Step-by-step instructions',
      'sal.time':  'The process may take between 2 and 5 minutes depending on the person.',
      'sal.s1':    'Remove the collection tube with the attached mouthpiece from the plastic box. <strong>Always hold it by the tube</strong>, not by the mouthpiece, to avoid contaminating it.',
      'sal.s2':    'Gather saliva in your mouth for a few seconds and <strong>spit it into the mouthpiece</strong> until the saliva (the liquid, <em>not the bubbles</em>) reaches the <strong>fill line</strong> marked on the tube (\u201cFILL TO\u201d).',
      'sal.fig2':  'Only the liquid counts, not the bubbles',
      'sal.s3':    'Keep the tube <strong>upright</strong> and, with your other hand, close the mouthpiece cap by pressing until you hear a <strong>\u201cclick\u201d</strong>.',
      'sal.s4':    'Keeping the tube upright, <strong>unscrew the mouthpiece</strong> (with the cap already closed) and discard it directly in the bin.',
      'sal.s5':    'Use the <strong>small loose stopper</strong> to firmly close the tube, without touching the tube opening directly with your hands.',
      'sal.s6':    'With the tube tightly closed, <strong>shake it for 5\u201310 seconds</strong> so that the saliva and the liquid from the cap mix well.',
      'sal.s7':    'Stick the <strong>self-adhesive label</strong> (attached to the plastic box) with your name, barcode and Biobank code onto the tube. Place the tube back in its original plastic box.',
      'sal.s8':    'Place the plastic box in the <strong>small padded envelope</strong> (already labelled for the attention of \u00c1frica Manero) and keep it at <strong>room temperature</strong> until collection. This sample does not need to be refrigerated.',
      'sal.tip8':  '\ud83d\udccc <strong>Group shipment (several family members):</strong> If you have received several kits, place all the boxes in a large padded envelope or in the same box in which you received them, using the large destination label included for the attention of \u00c1frica Manero.',

      // ── paquete.html / paquete-sin-saliva.html ─────────
      'pak.h2':      'Package and Shipment Instructions',
      'pak.intro':   'Below is a detailed description of the entire process you must follow for sample collection as well as for shipment.',
      'pak.alert':   '<strong>\u26a0\ufe0f Important</strong> This same package will be collected from the postal address you indicated once you have collected your samples, so please <strong>try to damage it as little as possible</strong> and do not discard any contents, as most items must be returned as indicated in this document.',
      'pak.contents':'\ud83d\udccb Contents of the polystyrene box',
      'pak.li1':     'Padded envelope with the destination address (open), for the attention of <strong>\u00c1frica Manero Ru\u00edz de Azua</strong>, for shipping the saliva sample.',
      'pak.li2':     'Cold pack (gel bag for freezing) that will keep the samples refrigerated on the return shipment. You should have received it <strong>unfrozen</strong> (at room temperature).',
      'pak.li3':     'Bubble wrap, to prevent direct contact between the samples and the frozen gel bag, and to protect the samples during shipment.',
      'pak.li4':     'Red-capped container labelled with your name and surname, for the urine sample.',
      'pak.li5':     'Zip-lock plastic bag, to place the urine container in once the sample has been taken.',
      'pak.li6':     'Plastic bag with paper strips for tear collection, 2 screw-cap tubes for storage, and a pair of disposable latex gloves.',
      'pak.li7':     'Plastic tube with swab for nasal mucosa sample collection.',
      'pak.li8':     'Printed QR code to access the sample collection and shipment instructions, and a <strong>self-adhesive label</strong> with the package shipping address after sample collection, addressed to Carol Arist\u00edmu\u00f1o.',
      'pak.steps':   '\u2705 Step-by-step instructions',
      'pak.s1':      'Remove all contents from the package and <strong>scan the QR code</strong> which will direct you to the sample collection, package preparation and shipment instructions.',
      'pak.s2':      'Place the cold pack (gel bag) in the <strong>freezer</strong> so it is ready for the day you need to prepare the package with the samples.',
      'pak.s3':      'Carefully read the instructions for collecting <strong>saliva, urine, tear and nasal mucosa</strong> samples and plan your sample collection according to the guidelines.',
      'pak.s3alert': '<strong>\u26a0\ufe0f Important: scheduling the shipment</strong> Samples must be sent <strong>the day after collection</strong>. Do not collect samples on a Saturday, as pick-up cannot take place on a Sunday. Also make sure you are available to hand the package to the courier at your home the day after collection.',
      'pak.s4':      'Once you have planned your sample collection, you must <strong>notify Joaqu\u00edn Castilla one day in advance</strong> so he can arrange the pick-up and send the courier on the day and to the address you specify.',
      'pak.s5':      'Once Joaqu\u00edn Castilla has been notified and the urine samples (which must be kept <strong>refrigerated</strong> until the package is prepared), tear samples (<strong>freeze</strong> until shipment), nasal mucosa (<strong>keep refrigerated</strong>) and saliva (<strong>no refrigeration required</strong>) have been collected, prepare the polystyrene box, ideally <strong>on the same day as collection</strong> or at the earliest the night before.',
      'pak.s6intro': 'Place the following items in the white polystyrene box, <strong>in this order</strong>:',
      'pak.s6li1':   '\ud83e\uddca Cold pack (gel bag) <strong>frozen</strong>, at the bottom.',
      'pak.s6li2':   '\ud83e\udde7 Bubble wrap, between the cold pack and the samples.',
      'pak.s6li3':   '\u2709\ufe0f Padded envelope (for the attention of \u00c1frica Manero) with the properly labelled plastic box containing the saliva sample.',
      'pak.s6li4':   '\ud83d\ude9d Urine sample in its corresponding zip-lock bag, sealed.',
      'pak.s6li5':   '\ud83d\udc41\ufe0f Tear samples in their screw-cap tubes inside their plastic bag.',
      'pak.s6li6':   '\ud83d\udc43 Nasal mucosa sample in its corresponding plastic bag.',
      'pak.s7':      '<strong>Close</strong> the polystyrene box with tape or packing tape, stick the <strong>address label</strong> (for the attention of Carol Arist\u00edmu\u00f1o, of the Basque Biobank) on the outside, and hand the box to the courier responsible for the collection.',
      'pak.note':    '<strong>\ud83d\udccc Note</strong> If you do not have packing tape, let Joaqu\u00edn Castilla know so that the courier can bring this material when coming to collect the package.',

      // ── paquete-sin-saliva.html (differences) ──────────
      'pss.s3':      'Carefully read the instructions for collecting <strong>urine, tear and nasal mucosa</strong> samples and plan your sample collection according to the guidelines.',
      'pss.s5':      'Once Joaqu\u00edn Castilla has been notified and the urine samples (which must be kept <strong>refrigerated</strong> until the package is prepared), tear samples (<strong>freeze</strong> until shipment) and nasal mucosa (<strong>keep refrigerated</strong>) have been collected, prepare the polystyrene box, ideally <strong>on the same day as collection</strong> or at the earliest the night before.'
    }
  };

  // ── Engine ────────────────────────────────────────────────────────────────

  function getLang() {
    return localStorage.getItem('lang') || 'es';
  }

  function applyLang(lang) {
    var t = T[lang] || T['es'];

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.documentElement.lang = lang;
  }

  function switchLang(lang) {
    localStorage.setItem('lang', lang);
    applyLang(lang);
  }

  // ── Inject flag switcher into every page header ───────────────────────────

  document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    if (header) {
      var switcher = document.createElement('div');
      switcher.className = 'lang-switcher';
      switcher.innerHTML =
        '<button class="lang-btn" data-lang="es" onclick="switchLang(\'es\')">🇪🇸</button>' +
        '<button class="lang-btn" data-lang="en" onclick="switchLang(\'en\')">🇬🇧</button>';
      header.appendChild(switcher);
    }
    applyLang(getLang());
  });

  // ── Public API ────────────────────────────────────────────────────────────
  window.switchLang = switchLang;
  window.getLang = getLang;
  window.i18nText = function (key) {
    var t = T[getLang()] || T['es'];
    return t[key] !== undefined ? t[key] : key;
  };
  window._i18nRegister = function (esKeys, enKeys) {
    Object.assign(T.es, esKeys);
    Object.assign(T.en, enKeys);
  };

})();

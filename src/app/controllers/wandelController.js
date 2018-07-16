const controller = {};

//nodemailer = require('nodemailer');

controller.index2 = (req, res) => {

     
     res.render('wandel/index');
     console.log('Carga completa');

};


controller.contacto = (req, res) => {     
    res.render('wandel/contacto');
    console.log('Carga contacto cargando');

};

controller.productos = (req, res) => {     
    res.render('wandel/productos');
    console.log('Carga contacto cargando');

};

controller.nosotros = (req, res) => {     
    res.render('wandel/nosotros');
    console.log('Carga contacto cargando');

};

/*
controller.test = (req, res) => {     
    res.render('galtec/index2');
    console.log('Carga completa 2');

};

controller.contacto = (req, res) => {     
    res.render('galtec/contacto');
    console.log('Carga contacto cargando');

};

controller.nosotros = (req, res) => {     
    res.render('galtec/nosotros');
    console.log('Nosotros cargando');

};

controller.servicios = (req, res) => {     
    res.render('galtec/servicios');
    console.log('servicios cargando');

};


controller.enviar_msg = (req, res) => {

    console.log('enviando mail');
    
    output =`
       <p> Sugerencia o queja </p>
       <h3>=== Detalles ===</h3>
       <ul>
         <li> Nombre: ${req.body.name}</li>
         <li> Nombre: ${req.body.subject}</li>
         <li> Email: ${req.body.email}</li>
         <li> Dirección: ${req.body.budget}</li>
        
   
         
       </ul> 
       `;
   
       let transporter = nodemailer.createTransport({
         host: 'smtp.zoho.com',
         port: 465,//25,//587,
         secure: true, // true for 465, false for other ports
         auth: {
             user: 'alonso.hhl@galtec.org', // generated ethereal user
             pass: 'alonsoucsm'  // generated ethereal password
         },
         tls:{
           rejectUnauthorized:false
         }
       });
   
       let mailOptions = {
           from: '"Galtec Mailer Contacto" <alonso.hhl@galtec.org>', // sender address
           to: 'admin@galtec.org , alonso.hhl@galtec.org , diana.pd@galtec.org',// list of receivers
           subject: 'recepcion de solicitud', // Subject line
           text: 'Revise el correo en un navegador valido, compatible con HTML', // plain text body
           html: output // html body ,
           
       };
   
       // send mail with defined transport object
         transporter.sendMail(mailOptions, (error, info) => {
           if (error) {
               return console.log(error);
           }
           console.log('Message sent: %s', info.messageId);   
           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
           
           res.render('galtec/index');
   //        res.render('form/forms', {msg:'1'});
       });
       //res.render('form/exito');
       console.log(output);
     };
   
  */
module.exports = controller; 
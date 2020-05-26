let config = {
	server:{
		port:3001,
		tls:{
			enabled:false,
			ca:"./src/ssl/ca.pem",
			server:{
				cert:"./src/ssl/cert.pem",
				key:"./src/ssl/cert-key.pem",
			},
			requestCert:false,
			rejectUnauthorized:false
			},
	},
	MONGO: {
		MONGO_URL: (process.env.MONGO_URL || 'mongodb://localhost:27017/portfolio')
	},
	mailOptions:{
		login:{
			'user':'',
            'pass':""
		},
		adminMail:"kritiraj.fullstack@gmail.com",
		clientSubject:"Thanks for Reaching Out",
		adminSubject:"Request for Collaboration",
		adminName:"Kriti Raj Singhi"
	}
}

module.exports = config;
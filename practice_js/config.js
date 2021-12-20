// config/config.js

const dotEnv = require('dotenv');
dotEnv.config();

const { DATABASE_HOST, DATABASE_PASSWORD, DATABASE_USER, DATABASE_PORT } = process.env;

function required(key, defaultValue = undefined) {
    // process.env에 우리가 지정한 key가 있다면 key의 값을 가져오고 없으면 defaultValue로 덮는다. defaultValue도 없다면 undefined
	    // -> error
		    const value = process.env[key] || defaultValue;
			    if (value == null) { // null, undefined 모두 해당됨
				        throw new Error(`Key ${key} is undefined`);
						    }
							    // key나 defaultValue가 있다면 value 리턴
								    return value;
									}

									module.exports = {
									    bcrypt: {
										        saltRounds: parseInt(required('BCRYPT_SALT_ROUNDS', 12))
												    },
													    development: {
														        username: DATABASE_USER,
																        password: DATABASE_PASSWORD,
																		        database: 'emotipop',
																				        host: DATABASE_HOST,
																						        port: DATABASE_PORT,
																								        dialect: 'mysql',
																										    },

																											    test: {
																												        username: DATABASE_USER,
																														        password: DATABASE_PASSWORD,
																																        database: 'emotipop',
																																		        host: DATABASE_HOST,
																																				        port: DATABASE_PORT,
																																						        dialect: 'mysql',
																																								    },

																																									    production: {
																																										        username: DATABASE_USER,
																																												        password: DATABASE_PASSWORD,
																																														        database: 'emotipop',
																																																        host: DATABASE_HOST,
																																																		        port: DATABASE_PORT,
																																																				        dialect: 'mysql',
																																																						    },
																																																							};



const User = rootRequire('dal/models/User');

class UserService {
	constructor() {}

	getPassportConfig() {
		return {
			authenticate() {
				return User.authenticate();
			},
			serializeUser() {
				return User.serializeUser();
			},
			deserializeUser() {
				return User.deserializeUser();
			}
		};
	}
}

module.exports = new UserService();
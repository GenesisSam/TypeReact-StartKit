declare namespace Model {
	interface IRawUser
		extends Readonly<{
			id: string;
			email: string;
			username: string;
			deviceUuid: string;
			role: number;
			confirmed: boolean;
		}> {}
}

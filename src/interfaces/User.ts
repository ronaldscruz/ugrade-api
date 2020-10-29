import { Role } from "@interfaces/Role";

export interface User {
	_id: string;
	email: string;
	password: string;
	roles: Role[];
}

export interface CreateUserPayload {
	email: string;
	password: string;
	roles: string[];
}

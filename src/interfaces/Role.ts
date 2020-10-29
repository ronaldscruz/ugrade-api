export interface Role {
	_id: string;
	title: string;
}

export interface CreateRolePayload {
	title: string;
	code?: string;
}

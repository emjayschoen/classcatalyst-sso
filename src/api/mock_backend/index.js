import { Util } from '@protastudios/prota-core-react';
import MOCK_WIDGETS from './mocks/widgets';
import * as User from './user';

export const { signIn, OAUTH, finishSignIn, register, confirmEmail, forgotPassword, resetPassword, updateCurrentUser } = User;

const { mockResourcefulAPI } = Util;
const WIDGET_API = mockResourcefulAPI('widget', MOCK_WIDGETS);

export const listWidgets = WIDGET_API.list;
export const updateWidget = WIDGET_API.update;

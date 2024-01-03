import { Util } from '@protastudios/prota-core-react';
import WidgetModel from '../models/widget_model';

const { ReadonlyResourcefulReducer } = Util;

const WidgetReducer = new ReadonlyResourcefulReducer('widget', WidgetModel);

global.widget_reducer = WidgetReducer;

export default WidgetReducer;

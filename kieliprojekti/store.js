import 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/filter';
import _ from 'lodash';

const store = new Subject();

let state = {};

const valitse = (...keys) => muutos => _.includes(keys, muutos.key);

function update(key /*:string*/, val) {
    const uusi = _.clone(state);

    uusi[key] = val;
    state = uusi;

    store.next({ key, val, state });
}

export { store, update, valitse };
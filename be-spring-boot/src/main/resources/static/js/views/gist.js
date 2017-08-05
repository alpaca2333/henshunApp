import {apis, showConnectionFailedMessage} from '../lib/common';
import {message} from 'antd';
import request from 'superagent';

        this.update = this.update.bind(this);

    update() {
        request.get(apis.getCustomerBabies(this.props.customerId)).end((err, resp) => {
            if (err) {
                showConnectionFailedMessage();
                return;
            }
            if (resp.error) {
                message.warning(resp.error.status + ' ' + resp.error.message);
                return;
            }
            const result = resp.body;
            if (result.error) {
                message.warning(result.error +  ' ' + result.message);
                return;
            }
            // TODO: 返回了正确的结果
        });
    }
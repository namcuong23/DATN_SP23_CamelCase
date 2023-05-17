import {
    RadiusUprightOutlined,
} from '@ant-design/icons';
import { Button, Space, notification } from 'antd';
import React, { useMemo } from 'react';

const Context = React.createContext({ name: 'Default' });

const ServicesEpr = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.error({
            message: `Error`,
            description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
            placement: 'topRight',
        });
    };

    const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);
    return (
        <Context.Provider value={contextValue}>
            {contextHolder}
            <Space>
                <Button
                    type="primary"
                    onClick={() => openNotification()}
                    icon={<RadiusUprightOutlined />}
                >
                    topRight
                </Button>
            </Space>
        </Context.Provider>

    )
}

export default ServicesEpr
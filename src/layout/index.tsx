/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-03 21:54:22
 * @LastEditTime: 2021-09-04 11:07:27
 * @LastEditors: zhaocheng.zhai
 */
import { Layout, Menu } from 'antd';
import styles from './index.less';
const { Header, Content } = Layout;

export default (props: any) => {
  const menuList = [
    { name: '项目列表', code: 'projectList' },
    { name: '任务列表', code: 'taskList' },
  ];
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo} />
        <Menu mode="horizontal" defaultSelectedKeys={['projectList']}>
          {menuList.map((_) => {
            return <Menu.Item key={_.code}>{_.name}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ padding: 20 }}>{props.children}</div>
      </Content>
    </Layout>
  );
};

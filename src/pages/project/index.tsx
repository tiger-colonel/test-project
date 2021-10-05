/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-03 22:04:43
 * @LastEditTime: 2021-09-04 17:54:30
 * @LastEditors: zhaocheng.zhai
 */
import { useState, useEffect } from 'react';
import styles from './index.less';

import { Table, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { history } from 'umi';

import { getAllProject, deleteProject } from '@/services/index';

import AddProject from './add';

export interface ProjectItem {
  name?: string;
  gitUrl?: string;
  underwayBranch?: string[];
  shellCmd?: string;
  projectId?: string;
}

export default () => {
  const [list, setList] = useState<ProjectItem[]>([]);
  const getAll = async () => {
    const res = await getAllProject();
    if (res.code === 0) {
      setList(
        res?.data?.map((item: ProjectItem) => ({
          ...item,
          key: item.projectId,
        })),
      );
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleDelete = async (record: ProjectItem) => {
    const { projectId } = record;
    const res = await deleteProject({ projectId });
    if (res?.code === 0) {
      message.success('删除成功');
      getAll();
    } else {
      message.error(res?.message);
    }
  };

  const [project, setProject] = useState<ProjectItem>({});
  const handleEdit = (record: ProjectItem) => {
    console.log('handleEdit');
    setVisible(true);
    setProject(record);
  };

  const handleAdd = () => {
    console.log('handleAdd');
    setProject({});
    setVisible(true);
  };

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'gitUrl',
      dataIndex: 'gitUrl',
      key: 'age',
    },
    {
      title: 'shellCmd',
      dataIndex: 'shellCmd',
      key: 'shellCmd',
    },
    {
      title: 'underwayBranch',
      dataIndex: 'underwayBranch',
      key: 'underwayBranch',
    },
    {
      title: '操作',
      key: 'address',
      render: (text: string, record: ProjectItem) => {
        return (
          <>
            <Button type="primary" className={styles.button} onClick={() => history.push('/publish')}>
              去部署
            </Button>
            <Button type="primary" className={styles.button} onClick={() => handleDelete(record)}>
              删除
            </Button>
            {/* <Button type="primary" className={styles.button} onClick={() => handleEdit(record)}>
              编辑
            </Button> */}
          </>
        );
      },
    },
  ];

  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} size="large" style={{ marginBottom: '24px' }}>
        新增项目1005
      </Button>
      <AddProject projectInfo={project} visible={visible} setVisible={setVisible} getAll={getAll} />
      <Table dataSource={list} columns={columns} />
    </>
  );
};

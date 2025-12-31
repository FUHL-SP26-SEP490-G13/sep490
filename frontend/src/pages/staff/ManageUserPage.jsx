import { Button, Table } from "antd";
import StaffLayout from "../../components/layout/staff.layout";

const StaffManageUserPage = () => {
  return (
    <StaffLayout title="Quản lý người dùng">
      {/* NOT REMOVE THIS NOTE - Đây là nơi bạn có thể thêm nội dung ở phần bên phải */}
      <h2>Đây là trang sử dụng font Sans Francisco</h2>
      <p>Welcome to the dashboard page.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore hic
        consequatur suscipit commodi aspernatur nemo porro totam cumque ullam,
        aliquam reprehenderit exercitationem est non, nam, voluptate iste
        corporis alias nihil!
      </p>
      <p>0 1 2 3 4 5 6 7 8 9</p>
      <Table>
        <Table.Column title="Name" align="center" dataIndex="name" key="name" />
        <Table.Column title="Age" align="center" dataIndex="age" key="age" />
        <Table.Column
          title="Address"
          align="center"
          dataIndex="address"
          key="address"
        />
        <Table.Column
          title="Action"
          align="center"
          dataIndex="action"
          key="action"
        />
      </Table>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </StaffLayout>
  );
};

export default StaffManageUserPage;

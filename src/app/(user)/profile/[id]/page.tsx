type Params = { params: { id: string } };

const UserID = ({ params }: Params) => {
  return <div className="text-center">{params.id}</div>;
};
export default UserID;

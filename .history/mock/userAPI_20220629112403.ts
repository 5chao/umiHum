const users = [
  { id: 1, name: 'Umi', nickName: 'U', gender: 'MALE' },
  { id: 2, name: 'Fish', nickName: 'B', gender: 'FEMALE' },
];

const generatorUser = () => {
 
  return Array.from({length: 50}, () => {
    return { id: Math.random(), name: Math.random().toString().substring(2, 8), nickName: 'U', gender: 'MALE' }
  })
}

export default {
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: generatorUser() },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};

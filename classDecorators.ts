function registerOrmModel(model: Function) {
  console.log(model);
}
function Entity(tableName: string) {
  return (target: Function) => {
    registerOrmModel(target);
  };
}

@Entity("TODOS")
class Todo {
  done = false;
}

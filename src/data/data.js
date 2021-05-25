const dataMock = {
  tasks: {
    "task-1": { id: "task-1", content: "Login page – performance issues", information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-2": { id: "task-2", content: "Sprint bugfix",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-3": { id: "task-3", content: "Shop page – performance issues",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-4": { id: "task-4", content: "Checkout bugfix",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-5": { id: "task-5", content: "Shop bug1", information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-6": { id: "task-6", content: "Shop bug2",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-7": { id: "task-7", content: "Shop bug3",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-8": { id: "task-8", content: "Shop bug4",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-9": { id: "task-9", content: "Shop bug5",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-10": { id: "task-10", content: "User page – performance issues",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-11": { id: "task-11", content: "Auth bugfix",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-12": { id: "task-12", content: "Main page – performance issues",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
    "task-13": { id: "task-13", content: "Main page bugfix",  information: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Backlog",
      tasksOrder: ["task-1", "task-2"],
      isEditing: false,
    },
    "column-2": {
      id: "column-2",
      title: "Planning",
      tasksOrder: ["task-3", "task-4", "task-5", "task-6", "task-7", "task-8", "task-9"],
      isEditing: false,
    },
    "column-3": {
      id: "column-3",
      title: "Doing",
      tasksOrder: ["task-10", "task-11"],
      isEditing: false,
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      tasksOrder: ["task-12", "task-13"],
      isEditing: false,
    },
  },
  columnsOrder: ["column-1", "column-2", "column-3", "column-4"],
};

export default dataMock;
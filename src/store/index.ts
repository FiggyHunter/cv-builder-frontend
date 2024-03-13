// import { useQueryClient, useQuery, useMutation } from "@tanstack/vue-query";

// // Access QueryClient instance
// const queryClient = useQueryClient();

// // Query
// const { isPending, isError, data, error } = useQuery({
//   queryKey: ["todos"],
//   queryFn: getTodos,
// });

// // Mutation
// const mutation = useMutation({
//   mutationFn: postTodo,
//   onSuccess: () => {
//     // Invalidate and refetch
//     queryClient.invalidateQueries({ queryKey: ["todos"] });
//   },
// });

// function onButtonClick() {
//   mutation.mutate({
//     id: Date.now(),
//     title: "Do Laundry",
//   });
// }

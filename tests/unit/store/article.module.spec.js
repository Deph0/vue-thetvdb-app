// import { actions } from "../../../src/store/article.module";
// import {
//   FETCH_ARTICLE
// } from "../../../src/store/actions.type";

// jest.mock("vue", () => {
//   return {
//     axios: {
//       get: jest.fn().mockImplementation(async articleSlug => {
//         if (articleSlug.includes("8371b051-cffc-4ff0-887c-2c477615a28e")) {
//           return {
//             data: {
//               article: {
//                 author: {},
//                 title: "Lorem ipsum dolor sit amet",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nisl. Morbi pulvinar nisl urna, tincidunt mattis tortor sollicitudin eget. Nulla viverra justo quis.",
//                 body:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum efficitur justo, nec aliquam quam rutrum in. Pellentesque vulputate augue quis vulputate finibus. Phasellus auctor semper sapien sit amet interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat auctor metus. Integer blandit lacinia volutpat.",
//                 tagList: ["lorem", "ipsum", "javascript", "vue"]
//               }
//             }
//           };
//         }
//         if (articleSlug.includes("f986b3d6-95c2-4c4f-a6b9-fbbf79d8cb0c")) {
//           return {
//             data: {
//               comments: [
//                 {
//                   id: 1,
//                   createdAt: "2018-12-01T15:43:41.235Z",
//                   updatedAt: "2018-12-01T15:43:41.235Z",
//                   body: "Lorem ipsum dolor sit amet.",
//                   author: {
//                     username: "dccf649a-5e7b-4040-b8c3-ecf74598eba2",
//                     bio: null,
//                     image: "https://via.placeholder.com/350x150",
//                     following: false
//                   }
//                 },
//                 {
//                   id: 2,
//                   createdAt: "2018-12-01T15:43:39.077Z",
//                   updatedAt: "2018-12-01T15:43:39.077Z",
//                   body:
//                     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquet.",
//                   author: {
//                     username: "8568a50a-9656-4d55-a023-632029513a2d",
//                     bio: null,
//                     image: "https://via.placeholder.com/350x150",
//                     following: false
//                   }
//                 }
//               ]
//             }
//           };
//         }
//         throw new Error("Article not existing");
//       }),
//       post: jest.fn().mockImplementation(async articleSlug => {
//         if (articleSlug.includes("582e1e46-6b8b-4f4d-8848-f07b57e015a0")) {
//           return null;
//         }
//         if (articleSlug.includes("5611ee1b-0b95-417f-a917-86687176a627")) {
//           return {
//             data: {
//               article: {
//                 author: {},
//                 title: "Lorem ipsum dolor sit amet",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nisl. Morbi pulvinar nisl urna, tincidunt mattis tortor sollicitudin eget. Nulla viverra justo quis.",
//                 body:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum efficitur justo, nec aliquam quam rutrum in. Pellentesque vulputate augue quis vulputate finibus. Phasellus auctor semper sapien sit amet interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat auctor metus. Integer blandit lacinia volutpat.",
//                 tagList: ["lorem", "ipsum", "javascript", "vue"]
//               }
//             }
//           };
//         }
//         throw new Error("Article not existing");
//       }),
//       delete: jest.fn().mockImplementation(async articleSlug => {
//         if (articleSlug.includes("657a6075-d269-4aec-83fa-b14f579a3e78")) {
//           return null;
//         }
//         if (articleSlug.includes("480fdaf8-027c-43b1-8952-8403f90dcdab")) {
//           return {
//             data: {
//               article: {
//                 author: {},
//                 title: "Lorem ipsum dolor sit amet",
//                 description:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed cursus nisl. Morbi pulvinar nisl urna, tincidunt mattis tortor sollicitudin eget. Nulla viverra justo quis.",
//                 body:
//                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum efficitur justo, nec aliquam quam rutrum in. Pellentesque vulputate augue quis vulputate finibus. Phasellus auctor semper sapien sit amet interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat auctor metus. Integer blandit lacinia volutpat.",
//                 tagList: ["lorem", "ipsum", "javascript", "vue"]
//               }
//             }
//           };
//         }
//         throw new Error("Article not existing");
//       })
//     }
//   };
// });

// describe("Vuex Article Module", () => {
//   it("should commit the previous article if it is given", async () => {
//     const commitFunction = jest.fn();
//     const context = { commit: commitFunction };
//     const articleSlug = "8371b051-cffc-4ff0-887c-2c477615a28e";
//     const prevArticle = {
//       author: {},
//       title: "Aye up, she's a reight bobby dazzler",
//       description:
//         "Yer flummoxed. Fair t' middlin, this is. Off f'r a sup down t'pub, to'neet. Ee bye ecky thump!",
//       body:
//         "Tha's better bi careful, lass - yer on a Scarborough warning! Tha meks a better door than a winder. Do I 'eckers like, You're in luck m'boy! Am proper knackered, aye I am that is I say.",
//       tagList: ["aye", "ipsum", "javascript", "vue"]
//     };
//     await actions[FETCH_ARTICLE](context, articleSlug, prevArticle);
//     expect(commitFunction.mock.calls[0][0]).toBe("setArticle");
//     expect(commitFunction.mock.calls[0][1]).toBe(prevArticle);
//   });

//   it("should return the data of the api call when calling the function", async () => {
//     const context = { commit: () => {} };
//     const articleSlug = "8371b051-cffc-4ff0-887c-2c477615a28e";
//     const prevArticle = undefined;
//     const actionCall = await actions[FETCH_ARTICLE](
//       context,
//       articleSlug,
//       prevArticle
//     );
//     expect(actionCall).toMatchSnapshot();
//   });
// });

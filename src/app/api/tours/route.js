// exports.getAll = (Model) =>
//   catchAsync(async (req, res, next) => {
//     // To allow for nested GET reviews on tour (hack)
//     let filter = {};
//     if (req.params.tourId) filter = { tour: req.params.tourId };

//     const features = new APIFeatures(Model.find(filter), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     // const doc = await features.query.explain();
//     const doc = await features.query;

//     // SEND RESPONSE
//     res.status(200).json({
//       status: "success",
//       results: doc.length,
//       data: {
//         data: doc,
//       },
//     });
//   });

//   exports.getAll = Model =>
//   catchAsync(async (req, res, next) => {
//     // To allow for nested GET reviews on tour (hack)
//     let filter = {};
//     if (req.params.tourId) filter = { tour: req.params.tourId };

//     const features = new APIFeatures(Model.find(filter), req.query)
//       .filter()
//       .sort()
//       .limitFields()
//       .paginate();
//     // const doc = await features.query.explain();
//     const doc = await features.query;

//     // SEND RESPONSE
//     res.status(200).json({
//       status: 'success',
//       results: doc.length,
//       data: {
//         data: doc
//       }
//     });
//   });

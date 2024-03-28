// import { NextResponse } from "next/server";

// export async function DELETE(
//   request: Request,
//   { params }: { params: IParams }
// ) {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) {
//     return NextResponse.error();
//   }

//   const { listingId } = params;

//   if (!listingId || typeof listingId !== "string") {
//     throw new Error("Invalid ID");
//   }

//   const listing = await prisma.listing.deleteMany({
//     where: {
//       id: listingId,
//       userId: currentUser.id,
//     },
//   });

//   return NextResponse.json(listing);
// }

// export async function GET(request: Request, { params }: { params: IParams }) {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) {
//     return NextResponse.error();
//   }

//   const { listingId } = params;

//   if (!listingId || typeof listingId !== "string") {
//     throw new Error("Invalid ID");
//   }

//   const listing = await prisma.listing.deleteMany({
//     where: {
//       id: listingId,
//       userId: currentUser.id,
//     },
//   });

//   return NextResponse.json(listing);
// }

// export async function PATCH(request: Request, { params }: { params: IParams }) {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) {
//     return NextResponse.error();
//   }

//   const { listingId } = params;

//   if (!listingId || typeof listingId !== "string") {
//     throw new Error("Invalid ID");
//   }

//   const listing = await prisma.listing.deleteMany({
//     where: {
//       id: listingId,
//       userId: currentUser.id,
//     },
//   });

//   return NextResponse.json(listing);
// }

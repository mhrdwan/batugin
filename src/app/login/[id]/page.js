
export default function Page({params}) {
  console.log(params.id)
  return <p>Post: {params.id}</p>
}

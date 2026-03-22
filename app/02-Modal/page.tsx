import { Modal } from "@/components/modal/Modal";
const dialogContent = <>
  <h2>Title</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo perspiciatis, assumenda molestias illum quia ratione architecto, mollitia rem inventore natus sed? Amet, eum dolores ipsa cumque laborum tenetur eligendi facilis porro, molestias quas placeat! Ea saepe error optio impedit provident fuga obcaecati eos fugit distinctio, dolorum maiores hic dignissimos eligendi deleniti ad odio accusamus, mollitia corrupti quasi. Illo, architecto eum quia cum laudantium aliquid temporibus animi officia dolore itaque. Dolores eveniet repellat tempore, nihil deserunt recusandae eius, aperiam accusamus aut voluptas quasi mollitia incidunt, ad quibusdam soluta fugit pariatur harum nemo. Voluptas quasi ratione hic odio veritatis dicta dolorem, explicabo dignissimos sunt molestias deleniti earum ut adipisci iste, aperiam saepe numquam asperiores, eaque corrupti officiis minima architecto. Explicabo pariatur quis ad, adipisci ipsum, consectetur voluptatum debitis nulla illum maiores necessitatibus quaerat eveniet. Hic harum eaque aut adipisci deleniti veniam. Voluptatem saepe quasi, illo porro vero corporis illum esse minima suscipit nostrum sunt mollitia eaque quos corrupti placeat qui iste deleniti, quaerat facilis, nisi eligendi hic harum. Dicta ipsum aut recusandae officiis vero, soluta cumque, consequatur excepturi delectus dolorem obcaecati nemo nostrum nulla sit ex alias distinctio aliquam minus deleniti debitis fugiat repudiandae. Nesciunt, dolore quas veniam et ut debitis corporis.</p>
</>

export default function ModalPage() {

  return (
    <>
      <Modal
        openText="Open modal"
        closeText="Close modal"
        modalContent={dialogContent}
      />
    </>
  )
}
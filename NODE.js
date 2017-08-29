class Node{
    constructor(key,parent == null,leftChild == null,rightChild == null){
        this.key=key;
        this.parent=parent;
        this.leftChild=leftChild;
        this.rightChild=rightChild;
    }
    //revisar(falta um return)
    find(key){
        if(this.key==key){
            return this;
        }else{
            if(key<this.key){
                if(this.leftChild == null){
                    return this.leftChild.find(key);}
                    else return null;
                }
            }else{
                if(this.rightChild !== null){
                    return this.rightChild.find(key);

                }else{
                    return null;

                    }
                }
     }
//revisar
        add(Node){
        if(Node.key < this.key){
            if(this.leftChild == null){
             this.leftChild = Node;
             //aqui recebe a raiz this representa o node inteiro    
             Node.parent=this;                   
            }
            else
             this.leftChild.add(Node);}
            if(this.rightChild == null){
                this.rightChild=Node;
                Node.parent=this;
            }else this.rightChild.add(Node);
        }
        /* algoritimos de percurso só estão corretos para imprimir
        alterar depois para receber operação como parametro e realizar a operação nos algoritimos */

        inOrder(){
         if(this.leftChild !== null ){
             this.leftChild.inOrder();
             console.log(this.key);
         }
         if(this.rightChild !== null){
             this.rightChild.inOrder();
         }

     }
        //correto
     preOrder(){
        console.log(this.key);
        if(this.leftChild !== null){
            this.leftChild.preOrder();
        }
        if(this.rightChild !== null){
            this.rightChild.preOrder();
        }
    }
    //correto
     posOrder(){
        if (this.leftChild !== null){
            this.leftChild.posOrder();
        }
        if (this.rightChild !== null){
            this.rightChild.posOrder();
        }
        console.log(this.key);
    }        
    //correto
    hasLeftChild(){
        return this.leftChild !== null;
    }
    //correto
    hasRightChild(){
        return this.rightChild !== null;
    }
    //correto
    hasBothChildren(){
        return(this.leftChild !== null && this.rightChild !== null);
    }
    //correto
    isLeaf(){
        return(this.leftChild == null && this.rightChild == null);
    }
     //revisar
    minimum(){
        let min = this;
        while(min.hasLeftChild()){
            min = min.leftChild;
        }
        return min;
    }
    //revisar
    maximum(){
        let max = this;
        while(max.hasRightChild()){
            max= max.rightChild;
        }
        return max;
    }
    //correto
   size(){
       //ja se assume que começa com 1 para evitar paradoxos
    let total = 1;

    if(this.leftChild !== null ){
       total = total + this.leftChild.size();
    }
    if(this.rightChild !== null){
       total = total + this.rightChild.size();
    }
      return total;
    }
    
    //correto
    sum(){
      let soma = this.key;
      
      if(this.leftChild !== null){
       soma = soma + this.leftChild.sum();
      }
      if(this.rightChild !== null){
          soma = this.rightChild.sum();
      }

    
    return this.key;
}

}

   const keys =[10, 7, 18, 9, 3, 8, 1, 11];
    
    let root = null;
    for(let i=0; i < keys.length; i++){
    if(root==null){
     root=new Node(keys[i]);
    else{
        root.add(new Node(key[i]));
        
 }
}
 }
  //let foundit = root.find (11);
  console.log (root.size());


class Node{
    constructor(key,parent== null,leftChild== null,rightChild== null){
        this.key=key;
        this.parent=parent;
        this.leftChild=leftChild;
        this.rightChild=rightChild;
    }
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

                    }else{return null;

                    }
                }
     }

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

        inOrder(operation){
         if(this.leftChild !== null ){
             this.leftChild.inOrder();
             operation();
         }
         if(this.rightChild !== null){
             this.rightChild.inOrder();
         }

     }

     preOrder(operation){
        operation();
        if(this.leftChild !== null){
            this.leftChild.preOrder();
        }
        if(this.rightChild !== null){
            this.rightChild.preOrder();
        }
    }

     posOrder(operation){
        if (this.leftChild !== null){
            this.leftChild.posOrder();
        }
        if (this.rightChild !== null){
            this.rightChild.posOrder();
        }
        operation();
    }        
    
    hasLeftChild(){
        return this.leftChild !== null;
    }
    
    hasRightChild(){
        return this.rightChild !== null;
    }
    
    hasBothChildren(){
        return(this.leftChild !== null && this.rightChild !== null);
    }
    
    isLeaf(){
        return(this.leftChild == null && this.rightChild == null);
    }
     
    minimum(){
        let min = this;
        while(min.hasLeftChild()){
            min = min.leftChild;
        }
        return min;
    }
    
    maximum(){
        let max = this;
        while(max.hasRightChild()){
            max= max.rightChild;
        }
        return max;
    }
    
   size(){
    let acumulador = 0;
    let tamanho = this;
    if(this !== null){
        acumulador++;
    }
    //verificar se um while usando both nao resolveria tendo em vista que ele verifica os dois juntamente
    while(tamanho.hasLeftChild()){
        acumulador++;
    }
    while(tamanho.hasRightChild()){
        acumulador++
    }
    return acumulador;
    
    }
    
    sum(){
      let soma = this;
      let resultadoEsquerda=0;
      let resultadoDireita=0;
      while(soma.hasLeftChild){
          soma.key= soma.key++;
        }
      while(soma.hasRightChild){
          soma.key=soma.key++;
      }
    return soma.key;
      

}


   const keys =[30,17,33,20,31];
    
    let root = null;
    for(let i=0; i < keys.length; i++){
    if(root==null){
     root=new Node(keys[i]);
    else{
        root.add(new Node(key[i]));
        
    }
}
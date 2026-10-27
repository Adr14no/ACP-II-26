# Integração Firestore — Vídeos e páginas de aulas

## Parâmetros definidos
- Projeto Firebase existente: `plataforma-aperfeicoamento` (reutiliza `firebase-config.js`).
- Coleção exclusiva: `videoAulas`. **Não usar a coleção `normas`.**
- Documento: `title`, `url`, `description`, `course`, `subject`, `category`, `duration`, `instructor`, `tags[]`, `provider`, `status`, `createdAt`, `createdBy`, `updatedAt`, `updatedBy`.
- Estados neste estágio: somente `draft`. O editor não publica aulas.
- Autorização: reaproveita `auth` e `isAdminUser()` do projeto. A verificação no cliente não substitui as regras do Firestore.
- URL: apenas `http:` e `https:`; validação não garante que o provedor permita incorporação.
- Listagem: `where("status", "==", "draft") + orderBy("updatedAt", "desc")`; pode exigir índice composto no Firestore, conforme mensagem do console.

## Regras de segurança — integração obrigatória
O arquivo de regras atual não está versionado na raiz deste repositório, portanto **não foi substituído nem presumido**. Antes de usar em produção, mescle uma regra equivalente à abaixo no arquivo de regras atualmente publicado, preservando todas as regras existentes:

```firestore
match /videoAulas/{videoId} {
  allow read: if request.auth != null
    && exists(/databases/$(database)/documents/admins/$(request.auth.uid))
    && get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.active == true;

  allow create: if request.auth != null
    && exists(/databases/$(database)/documents/admins/$(request.auth.uid))
    && get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.active == true
    && request.resource.data.status == "draft"
    && request.resource.data.createdBy == request.auth.uid
    && request.resource.data.updatedBy == request.auth.uid;

  allow update: if request.auth != null
    && exists(/databases/$(database)/documents/admins/$(request.auth.uid))
    && get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.active == true
    && resource.data.status == "draft"
    && request.resource.data.status == "draft"
    && resource.data.createdBy == request.resource.data.createdBy
    && request.resource.data.updatedBy == request.auth.uid;

  allow delete: if request.auth != null
    && exists(/databases/$(database)/documents/admins/$(request.auth.uid))
    && get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.active == true
    && resource.data.status == "draft";
}
```

A regra acima é uma referência de integração, não deve substituir o arquivo completo de regras. A consulta/listagem para administradores ativos precisa ser compatível com as regras do banco. Testar com usuário sem login, usuário comum, administrador ativo e documento não-draft.

## Implantação e validação
1. Publicar/mesclar as regras no Firebase Console ou no arquivo de regras oficial, preservando regras existentes.
2. Implantar o branch `admin-videos-integracao` em ambiente de preview.
3. Entrar com administrador ativo, salvar um rascunho e recarregar a página; o rascunho deve persistir.
4. Editar e salvar, excluir rascunho e confirmar que a coleção `normas` não foi alterada.
5. Se o Firestore solicitar índice composto para `status + updatedAt`, criar pelo link fornecido no erro.
6. A publicação e as páginas públicas de aula continuam fora deste estágio.

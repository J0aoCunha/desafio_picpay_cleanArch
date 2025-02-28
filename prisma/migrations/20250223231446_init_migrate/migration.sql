-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "money" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "cpf_cnpj" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "user_type" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_cpf_cnpj_key" ON "usuarios"("cpf_cnpj");

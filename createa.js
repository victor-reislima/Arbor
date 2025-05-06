import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function CreateAccount() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }
    console.log("Criando conta com:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold text-center text-green-800 mb-6">
            Criar uma conta no Árbor
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
              Criar Conta
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

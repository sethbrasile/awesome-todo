<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{tab | titleCase}} to access your Todos anywhere!
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.email"
        class="col"
        label="Email"
        :rules="[ val => isValidEmail(val) || 'Please enter a valid email address']"
        ref="email"
        lazy-rules
        outlined
        stack-label
      />
    </div>

    <div class="row q-mb-md">
      <q-input
        v-model="formData.password"
        class="col"
        label="Password"
        type="password"
        :rules="[ val => val.length >= 6 || 'Please use at least 6 characters']"
        ref="password"
        lazy-rules
        outlined
        stack-label
      />
    </div>

  <div class="row">
    <q-space />
    <q-btn
      color="primary"
      :label="tab"
      type="submit"
    />
  </div>
  </form>
</template>

<script src="./AuthForm.js" />

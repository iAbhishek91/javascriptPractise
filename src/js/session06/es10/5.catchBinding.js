try {
  throw new Error('es8');
} catch (error) {
  console.log('error');
}

// this is not supported in older version of nodejs
// available in LTS 10.16.3
try {
  throw new Error('es8');
} catch {
  console.log('error');
}
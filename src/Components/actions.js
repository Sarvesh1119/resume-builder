export function educationAction(payload) {
    return {
      type: "EDUCATION_DETAILS",
      payload,
    };
  }

export function progress(payload){
  return{
    type:"PROGRESS",
    payload
  }
}